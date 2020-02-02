import { Point } from './point';
import { Viewer } from './viewer';
import {
  BROWSERS,
  ButtonState,
  ControlAnchor,
  OverlayPlacement,
  OverlayRotationMode,
  Placement,
} from './members';
import { UserOpenSeadragonOptions } from './config/options';

export interface OpenSeadragon {
  new (options?: UserOpenSeadragonOptions): Viewer;
  (options?: UserOpenSeadragonOptions): Viewer;

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

  cancelEvent(event: any): void;

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
}
