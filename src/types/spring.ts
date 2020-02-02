export type SpringOptions = {
  sprintStiffness: number;
  animationTime: number;
} & Partial<{
  initial: number;
  exponential: boolean;
}>;

export interface Spring {
  sprintStiffness: number;
  animationTime: number;
  exponential: boolean;
  start: { value: number; time: number };
  target: { value: number; time: number };

  isAtTargetValue(): boolean;
  resetTo(target: number): void;
  shiftBy(delft: number): void;
  springTo(target: number): void;
  update(): boolean;
}

export interface SpringStatic {
  new (options: SpringOptions): Spring;
}
