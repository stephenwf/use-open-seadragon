import { Point, PointStatic, SimplePoint } from './point';
import { Viewer, ViewerStatic } from './viewer';
import {
  BROWSERS,
  ButtonState,
  ControlAnchor,
  OverlayPlacement,
  OverlayRotationMode,
  Placement,
} from './members';
import {
  OpenSeadragonOptions,
  UserOpenSeadragonOptions,
} from './config/options';
import { ButtonStatic } from './button';
import { ImageTileSourceStatic } from './tile-sources/image-tile-source';
import { ControlStatic } from './control';
import { OverlayStatic } from './overlay';
import { TmsTileSourceStatic } from './tile-sources/tms-tile-source';
import { RectStatic } from './rect';
import { ReferenceStripStatic } from './reference-strip';
import { TileSourceStatic } from './tile-sources/tile-source';
import { MouseTrackerStatic } from './mouse-tracker';
import { ControlDockStatic } from './control-dock';
import { TileCacheStatic } from './tile-cache';
import { IIIFTileSourceStatic } from './tile-sources/iiif-tile-source';
import { ImageLoaderStatic } from './image-loader';
import { DrawerStatic } from './drawer';
import { EventSourceStatic } from './event-source';
import { ViewportStatic } from './viewport';
import { WorldStatic } from './world';
import { TileStatic } from './tile';
import { DisplayRectStatic } from './display-rect';
import { DziTileSourceStatic } from './tile-sources/dzi-tile-source';
import { ButtonGroupStatic } from './button-group';
import { LegacyTileSourceStatic } from './tile-sources/legacy-tile-source';
import { OsmTileSourceStatic } from './tile-sources/osm-tile-source';
import { SpringStatic } from './spring';
import { TiledImageStatic } from './tiled-image';
import { NavigatorStatic } from './navigator';
import { ZoomifyTileSourceStatic } from './tile-sources/zoomify-tile-source';

export interface OpenSeadragon {
  new (options?: UserOpenSeadragonOptions): Viewer;
  (options?: UserOpenSeadragonOptions): Viewer;

  Button: ButtonStatic;
  ButtonGroup: ButtonGroupStatic;
  Control: ControlStatic;
  ControlDock: ControlDockStatic;
  DisplayRect: DisplayRectStatic;
  Drawer: DrawerStatic;
  DziTileSource: DziTileSourceStatic;
  EventSource: EventSourceStatic;
  IIIFTileSource: IIIFTileSourceStatic;
  ImageLoader: ImageLoaderStatic;
  ImageTileSource: ImageTileSourceStatic;
  LegacyTileSource: LegacyTileSourceStatic;
  MouseTracker: MouseTrackerStatic;
  Navigator: NavigatorStatic;
  OsmTileSource: OsmTileSourceStatic;
  Overlay: OverlayStatic;
  Point: PointStatic;
  Rect: RectStatic;
  ReferenceStrip: ReferenceStripStatic;
  Spring: SpringStatic;
  Tile: TileStatic;
  TileCache: TileCacheStatic;
  TiledImage: TiledImageStatic;
  TileSource: TileSourceStatic;
  TmsTileSource: TmsTileSourceStatic;
  Viewer: ViewerStatic;
  Viewport: ViewportStatic;
  World: WorldStatic;
  ZoomifyTileSource: ZoomifyTileSourceStatic;

  Browser: {
    vendor: BROWSERS;
    version: number;
    alpha: boolean;
  };

  BROWSERS: {
    UNKNOWN: BROWSERS.UNKNOWN;
    IE: BROWSERS.IE;
    FIREFOX: BROWSERS.FIREFOX;
    SAFARI: BROWSERS.SAFARI;
    CHROME: BROWSERS.CHROME;
    OPERA: BROWSERS.OPERA;
  };

  ButtonState: {
    REST: ButtonState.REST;
    GROUP: ButtonState.GROUP;
    HOVER: ButtonState.HOVER;
    DOWN: ButtonState.DOWN;
  };

  ControlAnchor: {
    NONE: ControlAnchor.NONE;
    TOP_LEFT: ControlAnchor.TOP_LEFT;
    TOP_RIGHT: ControlAnchor.TOP_RIGHT;
    BOTTOM_LEFT: ControlAnchor.BOTTOM_LEFT;
    BOTTOM_RIGHT: ControlAnchor.BOTTOM_RIGHT;
    ABSOLUTE: ControlAnchor.ABSOLUTE;
  };

  DEFAULT_SETTINGS: OpenSeadragonOptions;

  fullScreenApi: {
    supportsFullScreen: boolean;
    isFullScreen: () => boolean;
    getFullScreenElement: () => HTMLElement;
    requestFullScreen: () => void;
    exitFullScreen: () => void;
    cancelFullScreen: () => void;
    fullScreenEventName: string;
    fullScreenErrorEventName: string;
  };

  OverlayPlacement: {
    CENTER: OverlayPlacement.CENTER;
    TOP_LEFT: OverlayPlacement.TOP_LEFT;
    TOP: OverlayPlacement.TOP;
    TOP_RIGHT: OverlayPlacement.TOP_RIGHT;
    RIGHT: OverlayPlacement.RIGHT;
    BOTTOM_RIGHT: OverlayPlacement.BOTTOM_RIGHT;
    BOTTOM: OverlayPlacement.BOTTOM;
    BOTTOM_LEFT: OverlayPlacement.BOTTOM_LEFT;
    LEFT: OverlayPlacement.LEFT;
  };

  OverlayRotationMode: {
    NO_ROTATION: OverlayRotationMode.NO_ROTATION;
    EXACT: OverlayRotationMode.EXACT;
    BOUNDING_BOX: OverlayRotationMode.BOUNDING_BOX;
  };

  pixelDensityRatio: number;

  Placement: {
    CENTER: Placement.CENTER;
    TOP_LEFT: Placement.TOP_LEFT;
    TOP: Placement.TOP;
    TOP_RIGHT: Placement.TOP_RIGHT;
    RIGHT: Placement.RIGHT;
    BOTTOM_RIGHT: Placement.BOTTOM_RIGHT;
    BOTTOM: Placement.BOTTOM;
    BOTTOM_LEFT: Placement.BOTTOM_LEFT;
    LEFT: Placement.LEFT;
  };

  supportsCanvas: boolean;

  version: {
    versionStr: string;
    major: number;
    minor: number;
    patch: number;
  };

  addClass(element: HTMLElement, className: string): void;

  addEventListener<K extends keyof WindowEventMap>(
    element: HTMLElement,
    type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;

  cancelEvent(event: PointerEvent): void;

  capitalizeFirstLetter(string: string): string;

  createCallback<Args extends any[], Return, Obj>(
    object: Obj,
    method: (this: Obj, ...args: Args) => Return,
    ...args: Args
  ): () => Return;

  createFromDZI: never;

  delegate<Args extends any[], Return, Obj>(
    object: Obj,
    method: (this: Obj, ...args: Args) => Return,
    ...args: Args
  ): () => Return;

  extend: typeof Object.assign;

  getCssPropertyWithVendorPrefix(type: string): string;

  getElement(type: string | HTMLElement): HTMLElement;

  getElementOffset(type: string | HTMLElement): Point;

  getElementPosition(type: string | HTMLElement): Point;

  getElementSize(type: string | HTMLElement): Point;

  getElementStyle(type: string | HTMLElement): CSSStyleDeclaration;

  getMousePosition(event?: MouseEvent): Point;

  getPageScroll(): Point;

  getString(property: string): string;

  getUrlParameter(key: string): string;

  getWindowSize(): Point;

  imageFormatSupported(extension: string): boolean;

  indexOf(array: any[], searchString: string, position?: number): number;

  isArray(input: unknown): boolean;

  isEmptyObject(input: unknown): boolean;

  isFunction(input: unknown): boolean;

  isPlainObject(input: unknown): boolean;

  isWindow(input: unknown): boolean;

  jsonp(options: {
    url: string;
    callback: any;
    param: string;
    callbackName: string;
  }): void;

  makeAjaxRequest(options: {
    url: string;
    success?: (o: any) => void;
    error?: (o: any) => void;
    headers?: { [headers: string]: string } | null;
    responseType: string;
    withCredentials?: boolean;
  }): void;

  makeCenteredNode(element: HTMLElement): HTMLElement;

  makeNeutralElement(tagName: string): HTMLElement;

  makeTransparentImage(src: string): Element;

  now(): number;

  parseJSON<T = any>(string: string): T;

  parseXml<T extends Document = Document>(string: string): T;

  pointInElement(
    element: HTMLElement | string,
    point: Point | SimplePoint
  ): boolean;

  positiveModulo(number: number, modulo: number): number;

  removeClass(element: HTMLElement | string, className: string): void;

  /** @deprecated */
  removeEvent(...args: any[]): void;

  setElementOpacity(
    element: HTMLElement,
    opacity: number,
    usesAlpha?: boolean
  ): void;

  setElementTouchActionNone(element: HTMLElement): void;

  setPageScroll(): Point;

  setString(property: string, value: any): void;

  stopEvent(event: PointerEvent): void;

  type(): any;
}
