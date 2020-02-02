import { TileSource } from './tile-sources/tile-source';
import { Viewer } from './viewer';
import { TileCache } from './tile-cache';
import { Drawer } from './drawer';
import { ImageLoader } from './image-loader';
import { Rect, SimpleRect } from './rect';
import { Placement } from './members';
import { OpenSeadragonOptions } from './config/options';
import { EventSource } from './event-source';
import { Point, SimplePoint } from './point';

type TiledImageOptions = {
  source: TileSource;
  viewer: Viewer;
  tileCache: TileCache;
  drawer: Drawer;
  imageLoader: ImageLoader;
} & Partial<{
  x: number;
  y: number;
  height: number;
  width: number;
  fitBounds: Rect | SimpleRect;
  fitBoundsPlacement: Placement;
  clip: Rect | SimpleRect;
  springStiffness: number;
  animationTime: boolean;
  minZoomImageRatio: number;
  wrapHorizontal: boolean;
  wrapVertical: boolean;
  immediateRender: boolean;
  blendTime: number;
  alwaysBlend: boolean;
  minPixelRatio: number;
  smoothTileEdgesMinZoom: number;
  iOSDevice: boolean;
  opacity: number;
  preload: boolean;
  compositeOperation: OpenSeadragonOptions['compositeOperation'];
  debugMode: boolean;
  placeholderFillStyle: OpenSeadragonOptions['placeholderFillStyle'];
  crossOriginPolicy: OpenSeadragonOptions['crossOriginPolicy'];
  ajaxWithCredentials: boolean;
  loadTilesWithAjax: boolean;
  ajaxHeaders: any;
}>;

type TiledImageEvents =
  | { type: 'bounds-change'; payload: {} }
  | { type: 'clip-change'; payload: {} }
  | {
      type: 'composite-operation-change';
      payload: {
        compositeOperation: OpenSeadragonOptions['compositeOperation'];
      };
    }
  | { type: 'fully-loaded-change'; payload: { fullyLoaded: boolean } }
  | { type: 'opacity-change'; payload: { opacity: number } };

export interface TiledImage extends EventSource<TiledImageEvents> {
  source: TileSource;
  destroy(): void;
  draw(): void;
  fitBounds(
    bounds: Rect | SimpleRect,
    anchor?: Placement,
    immediately?: boolean
  ): void;
  getBounds(current?: boolean): Rect;
  getBoundsNoRotate(current?: boolean): Rect;
  getClip(): Rect | null;
  getClippedBounds(current?: boolean): Rect;
  getCompositeOperation(): OpenSeadragonOptions['compositeOperation'];
  getContentSize(): Point;
  getFullyLoaded(): boolean;
  getOpacity(): number;
  getPreload(): boolean;
  getRotation(current?: boolean): number;
  imageToViewerElementCoordinates(pixel: Point | SimplePoint): Point;
  imageToViewportCoordinates(point: Point | SimplePoint): Point;
  imageToViewportCoordinates(
    imageX: number,
    imageY: number,
    current?: boolean
  ): Point;
  imageToViewportRectangle(rect: Rect | SimpleRect): Rect;
  imageToViewportRectangle(
    imageX: number,
    imageY: number,
    pixelWidth: number,
    pixelHeight: number,
    current?: boolean
  ): Rect;
  imageToViewportZoom(imageZoom: number): number;
  imageToWindowCoordinates(pixel: Point | SimplePoint): Point;
  needsDraw(): boolean;
  reset(): void;
  setClip(clip: Rect | SimpleRect | null): void;
  setCompositeOperation(
    compositeOperation: OpenSeadragonOptions['compositeOperation']
  ): void;
  setHeight(height: number, immediately?: boolean): void;
  setOpacity(opacity: number): void;
  setPosition(position: Point | SimplePoint): void;
  setPreload(): void;
  setRotation(degrees: number, immediately?: boolean): void;
  setWidth(width: number, immediately?: boolean): void;
  update(): void;
  viewerElementToImageCoordinates(pixel: Point | SimplePoint): Point;
  viewportToImageCoordinates(point: Point | SimplePoint): Point;
  viewportToImageCoordinates(
    viewerX: number,
    viewerY: number,
    current?: boolean
  ): Point;
  viewportToImageRectangle(rect: Rect | SimpleRect): Rect;
  viewportToImageRectangle(
    viewerX: number,
    viewerY: number,
    pixelWidth: number,
    pixelHeight: number,
    current?: boolean
  ): Rect;
  viewportToImageZoom(viewportZoom: number): number;
  windowToImageCoordinates(pixel: Point | SimplePoint): Point;
}

export interface TiledImageStatic {
  new (options: TiledImageOptions): TiledImage;
}
