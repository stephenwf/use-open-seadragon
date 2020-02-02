import { Point, SimplePoint } from './point';
import { Rect, SimpleRect } from './rect';
import { Placement } from './members';
import { Viewport } from './viewport';

export type OverlayOptions = {
  element: HTMLElement;
  location: Point | Rect | SimplePoint | SimpleRect;
} & Partial<{
  placement: Placement;
  onDraw: (position: Point, size: Point, element: HTMLElement) => void;
  checkResize: boolean;
  width: number;
  height: number;
  rotationMode: number;
}>;

export interface Overlay {
  adjust(position: Point, size: Point): void;
  destroy(): void;
  drawHTML(container: HTMLElement): void;
  getBounds(viewport: Viewport): Rect;
  update(location: Point | Rect | SimplePoint | SimpleRect): void;
}

export interface OverlayStatic {
  new (options: OverlayOptions): Overlay;
}
