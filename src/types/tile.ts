import { Rect, SimpleRect } from './rect';
import { Point } from './point';
import { ImageRecord } from './image-record';
import { AjaxHeaders } from './util';

export interface Tile {
  // Required
  level: number;
  x: number;
  y: number;
  bounds: Rect;
  sourceBounds: Rect;
  exists: boolean;
  url: string;
  loadWithAjax: boolean;
  ajaxHeaders: AjaxHeaders;
  cacheKey: string;
  loaded: boolean;
  loading: boolean;
  beingDrawn: boolean;
  isRightMost: boolean;
  isBottomMost: boolean;

  // Nullable
  element: HTMLElement | null;
  imgElement: HTMLImageElement | null;
  style: string | null;
  position: Point | null;
  size: Point | null;
  blendStart: number | null;
  opacity: number | null;
  squaredDistance: number | null;
  visibility: number | null;
  context2D: CanvasRenderingContext2D | null;
  cacheImageRecord: ImageRecord | null;

  /** @deprecated */
  image: any; // Does not appear to be used.

  drawCanvas<Context extends HTMLCanvasElement>(
    context: Context,
    drawingHandler: (opts: {
      context: Context;
      tile: Tile;
      rendered: boolean;
    }) => void
  ): void;

  drawHTML(container: HTMLElement): void;
  getScaleForEdgeSmoothing(): number;
  getTranslationForEdgeSmoothing(scale?: number): number;
  toString(): string;
  unload(): void;
}

export interface TileStatic {
  new (
    level: number,
    x: number,
    y: number,
    bounds: Rect | SimpleRect,
    exists: boolean,
    url: string,
    context2D: CanvasRenderingContext2D,
    loadWithAjax: boolean,
    ajaxHeaders: AjaxHeaders,
    sourceBounds: Rect | SimpleRect
  ): Tile;
}
