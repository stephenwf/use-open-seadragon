export type Browser = {
  vendor: BROWSERS;
  version: number;
  alpha: boolean;
};

export enum BROWSERS {
  UNKNOWN,
  IE,
  FIREFOX,
  SAFARI,
  CHROME,
  OPERA,
}

export enum ButtonState {
  REST,
  GROUP,
  HOVER,
  DOWN,
}

export enum ControlAnchor {
  NONE,
  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  ABSOLUTE,
}

// @todo settings.
// export const DEFAULT_SETTINGS: Settings;

export type fullScreenApi = {
  supportsFullScreen: boolean;
  isFullScreen: () => boolean;
  getFullScreenElement: () => HTMLElement;
  requestFullScreen: () => void;
  exitFullScreen: () => void;
  cancelFullScreen: () => void;
  fullScreenEventName: string;
  fullScreenErrorEventName: string;
};

export enum OverlayPlacement {
  CENTER,
  TOP_LEFT,
  TOP,
  TOP_RIGHT,
  RIGHT,
  BOTTOM_RIGHT,
  BOTTOM,
  BOTTOM_LEFT,
  LEFT,
}

export enum OverlayRotationMode {
  NO_ROTATION,
  EXACT,
  BOUNDING_BOX,
}

export type pixelDensityRatio = number;

export enum Placement {
  CENTER,
  TOP_LEFT,
  TOP,
  TOP_RIGHT,
  RIGHT,
  BOTTOM_RIGHT,
  BOTTOM,
  BOTTOM_LEFT,
  LEFT,
}

export type supportsCanvas = boolean;

export type version = {
  versionStr: string;
  major: number;
  minor: number;
  patch: number;
};
