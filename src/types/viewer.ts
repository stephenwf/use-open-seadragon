import { UserOpenSeadragonOptions } from './config/options';
import { Drawer } from './drawer';
import { Viewport } from './viewport';
import { Overlay, OverlayOptions } from './overlay';
import { Point, SimplePoint } from './point';
import { Rect, SimpleRect } from './rect';
import { ControlAnchor, Placement } from './members';
import {
  GestureSettings,
  UserGestureSettings,
} from './config/gesture-settings';
import {
  ComplexTileSource,
  TiledImageSpecifier,
  TileSourceSpecifier,
} from './tile-sources/complex-tile-source';
import { ControlDock } from './control-dock';
import { EventSource } from './event-source';
import { GesturePoint } from './gesture-point';
import { MouseTracker } from './mouse-tracker';
import { TileSource } from './tile-sources/tile-source';
import { Tile } from './tile';
import { TiledImage } from './tiled-image';
import { World } from './world';
import { NavImages } from './config/nav-images';
import { ButtonGroup } from './button-group';
import { Control } from './control';
import { Button } from './button';
import { ImageLoader } from './image-loader';
import { TileCache } from './tile-cache';

export type ViewerEvents =
  | {
      type: 'add-item-failed';
      payload: {
        message: string;
        source: string;
        options: { tileSource: TileSourceSpecifier; index: number } & Partial<
          TiledImageSpecifier
        >;
      };
    }
  | {
      type: 'add-overlay';
      payload: {
        element: HTMLElement;
        location: Point | Rect | SimplePoint | SimpleRect;
        placement: Placement;
      };
    }
  | { type: 'animation'; payload: {} }
  | { type: 'animation-finish'; payload: {} }
  | { type: 'animation-start'; payload: {} }
  | {
      type: 'canvas-click';
      payload: {
        tracker: MouseTracker;
        position: Point;
        quick: boolean;
        shift: boolean;
        originalEvent: MouseEvent;
        preventDefaultAction: boolean;
      };
    }
  | {
      type: 'canvas-double-click';
      payload: {
        tracker: MouseTracker;
        position: Point;
        shift: boolean;
        originalEvent: MouseEvent;
        preventDefaultAction: boolean;
      };
    }
  | {
      type: 'canvas-drag';
      payload: {
        tracker: MouseTracker;
        position: Point;
        delta: Point;
        speed: number;
        direction: number;
        shift: boolean;
        originalEvent: MouseEvent;
        preventDefaultAction: boolean;
      };
    }
  | {
      type: 'canvas-drag-end';
      payload: {
        tracker: MouseTracker;
        position: Point;
        speed: number;
        direction: number;
        shift: boolean;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'canvas-enter';
      payload: {
        tracker: MouseTracker;
        pointerType: string;
        position: Point;
        buttons: number;
        pointers: number;
        insideElementPressed: boolean;
        buttonDownAny: boolean;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'canvas-exit';
      payload: {
        tracker: MouseTracker;
        pointerType: string;
        position: Point;
        buttons: number;
        pointers: number;
        insideElementPressed: boolean;
        buttonDownAny: boolean;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'canvas-key';
      payload: {
        originalEvent: MouseEvent;
        preventDefaultAction: boolean;
        preventVerticalPan: boolean;
        preventHorizontalPan: boolean;
      };
    }
  | {
      type: 'canvas-nonprimary-press';
      payload: {
        tracker: MouseTracker;
        position: Point;
        pointerType: string;
        button: number;
        buttons: number;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'canvas-nonprimary-release';
      payload: {
        tracker: MouseTracker;
        position: Point;
        pointerType: string;
        button: number;
        buttons: number;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'canvas-pinch';
      payload: {
        tracker: MouseTracker;
        gesturePoints: GesturePoint[];
        lastCenter: Point;
        center: Point;
        lastDistance: number;
        distance: number;
        shift: boolean;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'canvas-press';
      payload: {
        tracker: MouseTracker;
        pointerType: string;
        position: Point;
        insideElementPressed: boolean;
        insideElementReleased: boolean;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'canvas-release';
      payload: {
        tracker: MouseTracker;
        pointerType: string;
        position: Point;
        insideElementPressed: boolean;
        insideElementReleased: boolean;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'canvas-scroll';
      payload: {
        tracker: MouseTracker;
        position: Point;
        scroll: number;
        shift: boolean;
        originalEvent: MouseEvent;
      };
    }
  | { type: 'clear-overlay'; payload: {} }
  | { type: 'close'; payload: {} }
  | {
      type: 'constrain';
      payload: {
        immediately: boolean;
      };
    }
  | {
      type: 'container-enter';
      payload: {
        tracker: MouseTracker;
        position: Point;
        buttons: number;
        pointers: number;
        insideElementPressed: boolean;
        buttonDownAny: boolean;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'container-exit';
      payload: {
        tracker: MouseTracker;
        position: Point;
        buttons: number;
        pointers: number;
        insideElementPressed: boolean;
        buttonDownAny: boolean;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'controls-enabled';
      payload: {
        enabled: boolean;
      };
    }
  | {
      type: 'flip';
      payload: {
        flipped: number;
      };
    }
  | {
      type: 'full-page';
      payload: {
        fullPage: boolean;
      };
    }
  | {
      type: 'full-screen';
      payload: {
        fullScreen: boolean;
      };
    }
  | {
      type: 'home';
      payload: {
        immediately: boolean;
      };
    }
  | {
      type: 'mouse-enabled';
      payload: {
        enabled: boolean;
      };
    }
  | {
      type: 'navigator-click';
      payload: {
        tracker: MouseTracker;
        position: Point;
        quick: boolean;
        shift: boolean;
        originalEvent: MouseEvent;
        preventDefaultAction: boolean;
      };
    }
  | {
      type: 'navigator-drag';
      payload: {
        tracker: MouseTracker;
        position: Point;
        delta: Point;
        speed: number;
        direction: number;
        shift: boolean;
        originalEvent: MouseEvent;
        preventDefaultAction: boolean;
      };
    }
  | {
      type: 'navigator-scroll';
      payload: {
        tracker: MouseTracker;
        position: Point;
        scroll: number;
        shift: boolean;
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'open';
      payload: {
        source: TileSource;
      };
    }
  | {
      type: 'open-failed';
      payload: {
        message: string;
        source: string;
      };
    }
  | {
      type: 'page';
      payload: {
        page: number;
      };
    }
  | {
      type: 'pan';
      payload: {
        center: Point;
        immediately: boolean;
      };
    }
  | {
      type: 'pre-full-page';
      payload: {
        fullPage: boolean;
        preventDefaultAction: boolean;
      };
    }
  | {
      type: 'pre-full-screen';
      payload: {
        fullScreen: boolean;
        preventDefaultAction: boolean;
      };
    }
  | {
      type: 'remove-overlay';
      payload: {
        element: HTMLElement;
      };
    }
  | {
      type: 'reset-size';
      payload: {
        contentSize: Point;
        contentBounds: Rect;
        homeBounds: Rect;
        contentFactor: number;
      };
    }
  | {
      type: 'resize';
      payload: {
        newContainerSize: Point;
        maintain: boolean;
      };
    }
  | {
      type: 'rotate';
      payload: {
        degrees: number;
      };
    }
  | {
      type: 'tile-drawing';
      payload: {
        tile: Tile;
        tiledImage: TiledImage;
        context: Tile;
        rendered: Tile;
      };
    }
  | {
      type: 'tile-drawn';
      payload: {
        tiledImage: TiledImage;
        tile: Tile;
      };
    }
  | {
      type: 'tile-load-failed';
      payload: {
        tile: Tile;
        tiledImage: TiledImage;
        time: number;
        message: string;
        tileRequest: XMLHttpRequest;
      };
    }
  | {
      type: 'tile-loaded';
      payload: {
        image: HTMLImageElement; // @todo
        tiledImage: TiledImage; // @todo
        tile: Tile;
        tileRequest: XMLHttpRequest | null;
        getCompletionCallback: () => () => void; //@todo
      };
    }
  | {
      type: 'tile-unloaded';
      payload: {
        tiledImage: TiledImage;
        tile: Tile;
      };
    }
  | {
      // Missing docs in source.
      // Inconsistent casing.
      type: 'update-level';
      payload: {
        tiledImage: TiledImage;
        havedrawn: boolean;
        drawLevel: boolean;
        level: number;
        opacity: number;
        visibility: number;
        bottomright: number;
        currenttime: number;
        best: Tile;
        drawArea: Rect;
      };
    }
  | {
      type: 'update-overlay';
      payload: {
        element: HTMLElement;
        location: Point | Rect | SimplePoint | SimpleRect;
        placement: Placement;
      };
    }
  | {
      type: 'update-tile';
      payload: {
        tiledImage: TiledImage;
        tile: Tile;
      };
    }
  | { type: 'update-viewport'; payload: {} }
  | { type: 'viewport-change'; payload: {} }
  | {
      type: 'visible';
      payload: {
        visible: boolean;
      };
    }
  | {
      type: 'zoom';
      payload: {
        zoom: number;
        refPoint: Point;
        immediately: boolean;
      };
    };

export interface Viewer extends EventSource<ViewerEvents>, ControlDock {
  // Undocumented
  id: string;
  hash: number;
  overlaysContainer: HTMLDivElement;
  collectionDrawer: Drawer | null;
  collectionViewport: Viewport | null;
  navImages: NavImages;
  buttons: ButtonGroup;
  crossOriginPolicy: boolean;
  ajaxWithCredentials: boolean;
  ajaxHeaders: any;
  loadTilesWithAjax: boolean;
  panHorizontal: boolean;
  panVertical: boolean;
  constrainDuringPan: boolean;
  wrapHorizontal: boolean;
  wrapVertical: boolean;
  visibilityRatio: number;
  minPixelRatio: number;
  defaultZoomLevel: number;
  minZoomLevel: number | null;
  maxZoomLevel: number | null;
  homeFillsViewer: boolean;
  clickTimeThreshold: number;
  clickDistThreshold: number;
  dblClickTimeThreshold: number;
  dblClickDistThreshold: number;
  springStiffness: number;
  animationTime: number;
  gestureSettingsMouse: UserGestureSettings;
  gestureSettingsTouch: UserGestureSettings;
  gestureSettingsPen: UserGestureSettings;
  gestureSettingsUnknown: UserGestureSettings;
  zoomPerClick: number;
  zoomPerScroll: number;
  zoomPerSecond: number;
  blendTime: number;
  alwaysBlend: boolean;
  autoHideControls: boolean;
  immediateRender: boolean;
  minZoomImageRatio: number;
  maxZoomPixelRatio: number;
  smoothTileEdgesMinZoom: number;
  iOSDevice: boolean;
  pixelsPerWheelLine: number;
  pixelsPerArrowPress: number;
  autoResize: boolean;
  preserveImageSizeOnResize: boolean;
  minScrollDeltaTime: number;
  rotationIncrement: number;
  showSequenceControl: boolean;
  sequenceControlAnchor: ControlAnchor | null;
  preserveViewport: boolean;
  preserveOverlays: boolean;
  navPrevNextWrap: boolean;
  showNavigationControl: boolean;
  navigationControlAnchor: ControlAnchor | null;
  showZoomControl: boolean;
  showHomeControl: boolean;
  showFullPageControl: boolean;
  showRotationControl: boolean;
  showFlipControl: boolean;
  controlsFadeDelay: number;
  controlsFadeLength: number;
  mouseNavEnabled: boolean;
  showNavigator: boolean;
  navigatorId: number;
  navigatorPosition:
    | 'ABSOLUTE'
    | 'TOP_LEFT'
    | 'TOP_RIGHT'
    | 'BOTTOM_LEFT'
    | 'BOTTOM_RIGHT';
  navigatorSizeRatio: number;
  navigatorMaintainSizeRatio: boolean;
  navigatorTop: number | null;
  navigatorLeft: number | null;
  navigatorHeight: number | null;
  navigatorWidth: number | null;
  navigatorAutoResize: boolean;
  navigatorAutoFade: boolean;
  navigatorRotate: boolean;
  navigatorBackground: string;
  navigatorOpacity: number;
  navigatorBorderColor: string;
  navigatorDisplayRegionColor: string;
  degrees: number;
  flipped: boolean;
  opacity: number;
  preload: boolean;
  compositeOperation: CompositeOperation | null;
  imageSmoothingEnabled: boolean;
  placeholderFillStyle: string | null;
  showReferenceStrip: boolean;
  referenceStripScroll: 'horizontal' | 'veritcal';
  referenceStripElement: HTMLElement | null;
  referenceStripHeight: number | null;
  referenceStripWidth: number | null;
  referenceStripPosition:
    | 'TOP_LEFT'
    | 'TOP_RIGHT'
    | 'BOTTOM_LEFT'
    | 'BOTTOM_RIGHT';
  referenceStripSizeRatio: number;
  collectionRows: number;
  collectionColumns: number;
  collectionLayout: 'horizontal';
  collectionMode: boolean;
  collectionTileSize: number;
  collectionTileMargin: number;
  imageLoaderLimit: number;
  maxImageCacheCount: number;
  timeout: number;
  useCanvas: boolean;
  prefixUrl: string;
  debugMode: boolean;
  controls: Control[];
  homeButton: Button;
  zoomInButton: Button;
  zoomOutButton: Button;
  fullPageButton: Button;
  innerTracker: MouseTracker;
  outerTracker: MouseTracker;
  imageLoader: ImageLoader;
  tileCache: TileCache;
  controlsShouldFade: boolean;
  controlsFadeBeginTime: number;

  canvas: HTMLDivElement; // not sure which.
  container: HTMLDivElement;
  drawer: Drawer;
  element: HTMLElement;
  initialPage: number;
  navigator: Navigator | null;
  viewport: Viewport;
  world: World;

  _cancelPendingImages(): void;
  addOverlay(options: OverlayOptions): void;
  addOverlay(
    element: HTMLElement | string,
    location: Point | Rect,
    placement: Placement,
    onDraw: (position: Point, size: Point, element: HTMLElement) => void
  ): void;
  addReferenceStrip(): void;
  addSimpleImage(
    options: { url: string; index: number } & Partial<TiledImageSpecifier>
  ): void;
  addTiledImage(
    options: { tileSource: TileSourceSpecifier; index: number } & Partial<
      TiledImageSpecifier
    >
  ): void;
  bindSequenceControls(): this;
  bindStandardControls(): this;
  clearOverlays(): this;
  close(): this;
  currentPage(): number;
  destroy(): void;
  forceRedraw(): this;
  gestureSettingsByDeviceType(type: string): GestureSettings;
  getOverlayById(element: HTMLElement | string): Overlay;
  goToPage(page: number): this; // docs missing param
  isFullPage(): boolean;
  isMouseNavEnabled(): boolean;
  isOpen(): boolean;
  isVisible(): boolean;
  open(tileSources: ComplexTileSource, initialPage?: number): this;
  removeOverlay(element: HTMLElement | string): this;
  removeReferenceStrip(): void;
  setDebugMode(debugMode?: boolean): void;
  setFullPage(fullPage: boolean): this;
  setFullScreen(fullScreen: boolean): this;
  setMouseNavEnabled(enabled: boolean): this;
  setVisible(visible: boolean): this;
  updateOverlay(
    element: HTMLElement | string,
    location: Point | Rect | SimplePoint | SimpleRect,
    placement: Placement
  ): this;
}

export interface ViewerStatic {
  new (options: UserOpenSeadragonOptions): this;
}
