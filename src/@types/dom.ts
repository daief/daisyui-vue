import { InputHTMLAttributes } from 'vue';

export type InputChangeEvent = Omit<Event, 'target'> & {
  target: HTMLInputElement;
};
