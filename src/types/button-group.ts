import { Button } from './button';
import { MouseTracker } from './mouse-tracker';

export interface ButtonGroup {
  buttons: Button[];
  element: HTMLElement;
  tracker: MouseTracker;
  clickTimeThreshold: number;
  clickDistThreshold: number;
  labelText: string;
  emulateEnter(): void;
  emulateExit(): void;
}

type ButtonGroupOptions = {
  buttons: Button[];
  element?: HTMLElement;
  clickTimeThreshold?: number;
  clickDistThreshold?: number;
  labelText?: string;
  group?: boolean;
};

export interface ButtonGroupStatic {
  new (options: ButtonGroupOptions): ButtonGroup;
}
