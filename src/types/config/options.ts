import { ComplexTileSource } from '../tile-sources/complex-tile-source';
import { PartialOrNull } from '../util';
import { GestureSettings, UserGestureSettings } from './gesture-settings';
import { ControlAnchor } from '../members';
import { TiledImage } from '../tiled-image';
import { NavImages, UserNavImages } from './nav-images';

export type OpenSeadragonOptions = {
  id: string;
  element: HTMLElement;

  // OTHER
  sequenceMode: boolean;

  //DATA SOURCE DETAILS
  /** @deprecated */
  xmlPath: string;
  tileSources: ComplexTileSource;
  tileHost: string;
  initialPage: number;
  crossOriginPolicy: boolean;
  ajaxWithCredentials: boolean;
  loadTilesWithAjax: boolean;
  ajaxHeaders: any;

  //PAN AND ZOOM SETTINGS AND CONSTRAINTS
  panHorizontal: boolean;
  panVertical: boolean;
  constrainDuringPan: boolean;
  wrapHorizontal: boolean;
  wrapVertical: boolean;
  visibilityRatio: number; //-> how much of the viewer can be negative space
  minPixelRatio: number; //->closer to 0 draws tiles meant for a higher zoom at this zoom
  defaultZoomLevel: number;
  minZoomLevel: number;
  maxZoomLevel: number;
  homeFillsViewer: boolean;

  //UI RESPONSIVENESS AND FEEL
  clickTimeThreshold: number;
  clickDistThreshold: number;
  dblClickTimeThreshold: number;
  dblClickDistThreshold: number;
  springStiffness: number;
  animationTime: number;
  gestureSettingsMouse: GestureSettings;
  gestureSettingsTouch: GestureSettings;
  gestureSettingsPen: GestureSettings;
  gestureSettingsUnknown: GestureSettings;
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
  preserveImageSizeOnResize: boolean; // requires autoResize=boolean
  minScrollDeltaTime: number;
  rotationIncrement: number;

  //DEFAULT CONTROL SETTINGS
  showSequenceControl: boolean; //SEQUENCE
  sequenceControlAnchor: ControlAnchor; //SEQUENCE
  preserveViewport: boolean; //SEQUENCE
  preserveOverlays: boolean; //SEQUENCE
  navPrevNextWrap: boolean; //SEQUENCE
  showNavigationControl: boolean; //ZOOM/HOME/FULL/ROTATION
  navigationControlAnchor: ControlAnchor; //ZOOM/HOME/FULL/ROTATION
  showZoomControl: boolean; //ZOOM
  showHomeControl: boolean; //HOME
  showFullPageControl: boolean; //FULL
  showRotationControl: boolean; //ROTATION
  showFlipControl: boolean; //FLIP
  controlsFadeDelay: number; //ZOOM/HOME/FULL/SEQUENCE
  controlsFadeLength: number; //ZOOM/HOME/FULL/SEQUENCE
  mouseNavEnabled: boolean; //GENERAL MOUSE INTERACTIVITY

  //VIEWPORT NAVIGATOR SETTINGS
  showNavigator: boolean;
  navigatorId: string;
  navigatorAutoResize: boolean;
  navigatorAutoFade: boolean;
  navigatorRotate: boolean;
  navigatorBackground: string;
  navigatorOpacity: number;
  navigatorBorderColor: string;
  navigatorDisplayRegionColor: string;

  // INITIAL ROTATION
  degrees: number;

  // INITIAL FLIP STATE
  flipped: boolean;

  // APPEARANCE
  opacity: number;
  preload: boolean;
  compositeOperation:
    | 'source-over'
    | 'source-atop'
    | 'source-in'
    | 'source-out'
    | 'destination-over'
    | 'destination-atop'
    | 'destination-in'
    | 'destination-out'
    | 'lighter'
    | 'copy'
    | 'xor';
  imageSmoothingEnabled: boolean;
  placeholderFillStyle:
    | string
    | CanvasGradient
    | CanvasPattern
    | ((tiledImage: TiledImage) => string | CanvasGradient | CanvasPattern);

  //REFERENCE STRIP SETTINGS
  showReferenceStrip: boolean;
  referenceStripScroll: 'horizontal' | 'vertical';
  referenceStripElement: HTMLElement;
  referenceStripHeight: number;
  referenceStripWidth: number;
  referenceStripPosition:
    | 'TOP_LEFT'
    | 'TOP_RIGHT'
    | 'BOTTOM_LEFT'
    | 'BOTTOM_RIGHT';
  referenceStripSizeRatio: number;

  //COLLECTION VISUALIZATION SETTINGS
  collectionRows: number; //or columns depending on layout
  collectionColumns: number; //columns in horizontal layout, rows in vertical layout
  collectionLayout: 'horizontal' | 'vertical'; //vertical
  collectionMode: boolean;
  collectionTileSize: number;
  collectionTileMargin: number;

  //PERFORMANCE SETTINGS
  imageLoaderLimit: number;
  maxImageCacheCount: number;
  timeout: number;
  useCanvas: boolean; // Use canvas element for drawing if available

  //INTERFACE RESOURCE SETTINGS
  prefixUrl: string;
  navImages: NavImages;

  //DEVELOPER SETTINGS
  debugMode: boolean;
  debugGridColor: string[];

  // VIEWPORT
  viewportMargins: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
} & ValidNavigatorConfigurations;

type ValidNavigatorConfigurations =
  | {
      navigatorPosition: 'ABSOLUTE';
      navigatorTop: number;
      navigatorLeft: number;
      navigatorHeight: number;
      navigatorWidth: number;
    }
  | ({
      navigatorPosition:
        | 'TOP_LEFT'
        | 'TOP_RIGHT'
        | 'BOTTOM_LEFT'
        | 'BOTTOM_RIGHT';
    } & (
      | { navigatorHeight: null; navigatorWidth: null }
      | {
          navigatorSizeRatio: number;
          navigatorMaintainSizeRatio: boolean;
        }
    ));

export type UserOpenSeadragonOptions = PartialOrNull<OpenSeadragonOptions> &
  PartialOrNull<{
    navImages: UserNavImages;
    gestureSettingsMouse: UserGestureSettings;
    gestureSettingsTouch: UserGestureSettings;
    gestureSettingsPen: UserGestureSettings;
    gestureSettingsUnknown: UserGestureSettings;
  }>;
