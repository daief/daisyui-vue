import { IMaybeRef } from '@/shared/types/common';
import { computed, unref } from 'vue';

interface IUseCounterOptions<T = unknown> {
  from: T;
  duration?: number;
  interval?: number;
  intervalCount?: number;
  updater: (progress: number, from: T) => T;
  onComplete?: VoidFunction;
  onUpdate?: (v: T) => void;
}

class SimpleAni<T> {
  #opts: IUseCounterOptions<T>;

  #loopTimer: number;
  #execedTime = 0;
  #execedCount = 0;
  #isRunning = false;

  #lastIntervalTime: number = 0;
  #lasttime: number = 0;

  current: T;

  constructor(opts: IUseCounterOptions<T>) {
    this.current = opts.from;
    this.#opts = opts;
  }

  play() {
    if (this.#isRunning) return;

    this.#isRunning = true;

    const loop = (t: number) => {
      this.#execedTime += t - this.#lasttime;
      this.#lasttime = t;

      const shouldContinue = this.#opts.duration
        ? this.#loopDuration()
        : this.#loopInterval(t);

      if (shouldContinue && this.#isRunning) {
        this.#loopTimer = requestAnimationFrame(loop);
      } else {
        this.#opts.onComplete?.();
      }
    };

    this.#loopTimer = requestAnimationFrame((t) => {
      this.#lasttime = t;
      this.#lastIntervalTime = t;
      loop(t);
    });
  }

  pause() {
    this.#isRunning = false;
    cancelAnimationFrame(this.#loopTimer);
  }

  reset() {
    this.pause();
    this.#execedCount = 0;
    this.#execedTime = 0;
  }

  manualComplete(d = 200) {}

  #loopDuration(): boolean {
    const p = Math.min(this.#execedTime / this.#opts.duration, 1);
    this.current = this.#opts.updater(p, this.#opts.from);
    this.#opts.onUpdate(this.current);
    return p < 1;
  }

  #loopInterval(t: number): boolean {
    if (t - this.#lastIntervalTime >= this.#opts.interval) {
      this.#lastIntervalTime = t;
      ++this.#execedCount;
      const p = Math.min(this.#execedCount / this.#opts.intervalCount, 1);
      this.current = this.#opts.updater(p, this.#opts.from);
      this.#opts.onUpdate(this.current);
      return p < 1;
    }
    return true;
  }
}

export function useCounter(opts: IMaybeRef<IUseCounterOptions<number>>) {
  const options = computed(() => unref(opts));
}

const a = new SimpleAni<number>({
  from: 100,
  // duration: 10 * 1000,
  interval: 100,
  intervalCount: 100,
  updater: (p) => {
    return (1 - p) * 100;
  },
  onUpdate: (val) => {
    console.log(val, Date.now());
  },
});

a.play();
