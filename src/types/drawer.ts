import { Viewer } from './viewer';
import { Viewport } from './viewport';
import { Point, SimplePoint } from './point';
import { OpenSeadragonOptions } from './config/options';
import { Rect, SimpleRect } from './rect';
import { Tile } from './tile';

export type DrawerOptions = {
  viewer: Viewer;
  viewport: Viewport;
  element: HTMLElement;
  debugGridColor?: number;
};

export interface Drawer {
  canvas: HTMLCanvasElement | HTMLDivElement;
  container: HTMLElement;
  context: CanvasRenderingContext2D | null;
  /** @deprecated use Drawer.container */
  element: HTMLElement;
  blendSketch(options: {
    opacity: number;
    scale?: number;
    translate?: Point | SimplePoint;
    compositeOperation?: OpenSeadragonOptions['compositeOperation'];
    bounds?: Rect | SimpleRect;
  }): void;
  canRotate(): boolean;
  clear(): void;
  destroy(): void;
  drawTile(
    tile: Tile,
    drawingHandler: (options: {
      context: CanvasRenderingContext2D | null;
      tile: Tile;
      rendered: boolean;
    }) => void,
    useSketch: boolean,
    scale?: number,
    translate?: Point | SimplePoint
  ): void;
  getCanvasSize(sketch?: boolean): Point;
  getOpacity(): number;
  setImageSmoothingEnabled(imageSmoothingEnabled: boolean): void;
  setOpacity(opacity: number): void;
  viewportToDrawerRectangle(rectangle: Rect | SimpleRect): Rect;
}

export interface DrawerStatic {
  new (options: DrawerOptions): Drawer;
}
