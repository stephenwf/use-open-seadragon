import { ControlOptions } from './control';

export interface ControlDock {
  addControl(element: HTMLElement, controlOptions: ControlOptions): void;
  areControlsEnabled(): boolean;
  clearControls(): this;
  removeControl(): this;
  setControlsEnabled(): this;
}

export interface ControlDockStatic {
  new (): ControlDock;
}
