import { ControlAnchor } from './members';

export type ControlOptions = {
  anchor?: ControlAnchor;
  attachToViewer?: boolean;
  autoFade?: boolean;
};

export interface Control {
  anchor: ControlAnchor;
  autoFade: boolean;
  container: HTMLElement;
  element: HTMLElement;
  wrapper: HTMLElement;
  destroy(): void;
  isVisible(): boolean;
  setOpacity(opacity: number): void;
  setVisible(visible: boolean): void;
}

export interface ControlStatic {
  new (
    element: HTMLElement,
    options: ControlOptions,
    container: HTMLElement
  ): Control;
}
