export interface IAnimationTimerOptions<T = unknown> {
  initialValue: T;
  duration?: number;
  interval?: number;
  updater: (ctx: AnimationTimer<T>, progress: number, from: T) => T;
  onComplete?: (ctx: AnimationTimer<T>) => void;
  onUpdate?: (ctx: AnimationTimer<T>, v: T) => void;
}

const intervalTimeout = (fn: FrameRequestCallback, interval: number) => {
  return setTimeout(() => {
    fn(performance.now());
  }, interval) as any as number;
};

export class AnimationTimer<T> {
  #opts: IAnimationTimerOptions<T>;

  #loopTimer: number;
  #executionTime = 0;
  #isRunning = false;

  #lastIntervalTime: number = 0;
  #lasttime: number = 0;

  current: T;

  constructor(opts: IAnimationTimerOptions<T>) {
    this.current = opts.initialValue;
    this.#opts = opts;
  }

  updateOptions(o: Partial<IAnimationTimerOptions<T>>) {
    this.#opts = {
      ...this.#opts,
      ...o,
    };
  }

  play() {
    if (this.#isRunning) return;

    this.#isRunning = true;

    const timeoutFn = this.#opts.interval
      ? (cb: FrameRequestCallback) => intervalTimeout(cb, this.#opts.interval)
      : requestAnimationFrame;

    const loop = (t: number) => {
      const delta = t - this.#lasttime;
      this.#executionTime += delta;
      this.#lasttime = t;

      const shouldContinue = this.#opts.interval
        ? this.#loopInterval(t)
        : this.#loopDuration();

      if (shouldContinue && this.#isRunning) {
        this.#loopTimer = timeoutFn(loop);
      } else {
        this.#opts.onComplete?.(this);
      }
    };

    this.#loopTimer = timeoutFn((t) => {
      this.#lasttime = t;
      this.#lastIntervalTime = t;
      loop(t);
    });
  }

  pause() {
    this.#isRunning = false;
    cancelAnimationFrame(this.#loopTimer);
    clearTimeout(this.#loopTimer);
  }

  reset() {
    this.pause();
    this.#executionTime = 0;
    this.current = this.#opts.initialValue;
  }

  // manualComplete(d = 200) {
  //   if (!this.#opts.duration) return Promise.resolve();
  //   const restTime = this.#opts.duration - this.#executionTime;
  //   const ratio = restTime / d;
  //   return new Promise<void>((resolve) => {
  //     let last = 0;
  //     let tmpReduceTime = this.#executionTime;
  //     const ctx = this;
  //     requestAnimationFrame(function loop(t) {
  //       if (!last) last = t;
  //       const delta = (t - last) * ratio;
  //       ctx.#executionTime += t - last;
  //       last = t;
  //       tmpReduceTime += delta;
  //       if (ctx.#calcCurrent(tmpReduceTime)) {
  //         requestAnimationFrame(loop);
  //       } else {
  //         resolve();
  //       }
  //     });
  //   });
  // }

  #calcCurrent(executionTime: number) {
    const p = !this.#opts.duration
      ? 0
      : Math.min(executionTime / this.#opts.duration, 1);
    this.current = this.#opts.updater(this, p, this.#opts.initialValue);
    this.#opts.onUpdate(this, this.current);
    return p < 1;
  }

  #loopDuration(): boolean {
    return this.#calcCurrent(this.#executionTime);
  }

  #loopInterval(current: number): boolean {
    let delta = current - this.#lastIntervalTime;
    while (delta >= this.#opts.interval && this.#isRunning) {
      delta -= this.#opts.interval;
      this.#lastIntervalTime += this.#opts.interval;
      const res = this.#calcCurrent(this.#executionTime);
      if (!res) return false;
    }
    return true;
  }
}
