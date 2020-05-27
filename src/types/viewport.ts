import { OpenSeadragonOptions } from './config/options';
import { Point, SimplePoint } from './point';
import { Rect, SimpleRect } from './rect';

export type ViewportOptions = {
  margins: OpenSeadragonOptions['viewportMargins'];
  springStiffness: OpenSeadragonOptions['springStiffness'];
  animationTime: OpenSeadragonOptions['animationTime'];
  minZoomImageRatio: OpenSeadragonOptions['minZoomImageRatio'];
  maxZoomPixelRatio: OpenSeadragonOptions['maxZoomPixelRatio'];
  visibilityRatio: OpenSeadragonOptions['visibilityRatio'];
  wrapHorizontal: OpenSeadragonOptions['wrapHorizontal'];
  wrapVertical: OpenSeadragonOptions['wrapVertical'];
  defaultZoomLevel: OpenSeadragonOptions['defaultZoomLevel'];
  minZoomLevel: OpenSeadragonOptions['minZoomLevel'];
  maxZoomLevel: OpenSeadragonOptions['maxZoomLevel'];
  degrees: OpenSeadragonOptions['degrees'];
  homeFillsViewer: OpenSeadragonOptions['homeFillsViewer'];
};

export interface Viewport {
  _contentSize: Rect;
  applyConstraints(immediately?: boolean): Viewport;
  deltaPixelsFromPoints(
    deltaPoints: Point | SimplePoint,
    current?: boolean
  ): Point;
  deltaPixelsFromPointsNoRotate(
    deltaPoints: Point | SimplePoint,
    current?: boolean
  ): Point;
  deltaPointsFromPixels(
    deltaPixels: Point | SimplePoint,
    current?: boolean
  ): Point;
  deltaPointsFromPixelsNoRotate(
    deltaPixels: Point | SimplePoint,
    current?: boolean
  ): Point;
  ensureVisible(immediately?: boolean): Viewport;
  fitBounds(bounds: Rect | SimpleRect, immediately?: boolean): Viewport;
  fitBoundsWithConstraints(
    bounds: Rect | SimpleRect,
    immediately?: boolean
  ): Viewport;
  fitHorizontally(immediately?: boolean): Viewport;
  fitVertically(immediately?: boolean): Viewport;
  getAspectRatio(): void;
  getBounds(current?: boolean): Rect;
  getBoundsNoRotate(current?: boolean): Rect;
  getBoundsNoRotateWithMargins(current?: boolean): Rect;
  getBoundsWithMargins(current?: boolean): Rect;
  getCenter(current?: boolean): void;
  getConstrainedBounds(current?: boolean): Viewport;
  getContainerSize(): Point;
  getFlip(): boolean;
  getHomeBounds(): Rect;
  getHomeBoundsNoRotate(): Rect;
  getHomeZoom(): number;
  getMargins(): { top: number; left: number; bottom: number; right: number };
  getMaxZoom(): void;
  getMinZoom(): void;
  getRotation(): number;
  getZoom(current?: boolean): void;
  goHome(immediately?: boolean): void;
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
  panBy(delta: Point | SimplePoint, immediately?: boolean): Viewport;
  panTo(center: Point | SimplePoint, immediately?: boolean): Viewport;
  pixelFromPoint(point: Point | SimplePoint, current?: boolean): Point;
  pixelFromPointNoRotate(point: Point | SimplePoint, current?: boolean): Point;
  pointFromPixel(pixel: Point | SimplePoint, current?: boolean): Point;
  pointFromPixelNoRotate(pixel: Point | SimplePoint, current?: boolean): Point;
  resetContentSize(contentSize: Point | SimplePoint): Viewport;
  resize(): Viewport;
  setFlip(state: boolean): Viewport;
  setMargins(
    margins: Partial<{
      top: number;
      left: number;
      bottom: number;
      right: number;
    }>
  ): void;
  setRotation(): Viewport;
  toggleFlip(): Viewport;
  update(): boolean;
  viewerElementToImageCoordinates(pixel: Point | SimplePoint): Point;
  viewerElementToViewportCoordinates(pixel: Point | SimplePoint): Point;
  viewerElementToViewportRectangle(rectangle: Rect | SimpleRect): Rect;
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
  viewportToViewerElementCoordinates(point: Point | SimplePoint): Point;
  viewportToViewerElementRectangle(rectangle: Rect | SimpleRect): Rect;
  viewportToWindowCoordinates(point: Point | SimplePoint): Point;
  windowToImageCoordinates(pixel: Point | SimplePoint): Point;
  windowToViewportCoordinates(pixel: Point | SimplePoint): Point;
  zoomBy(number: number, immediately?: boolean): Viewport;
  zoomTo(
    zoom: number,
    refPoint?: Point | SimplePoint,
    immediately?: boolean
  ): Viewport;
}

export interface ViewportStatic {
  new (options?: Partial<ViewportOptions>): Viewport;
}
