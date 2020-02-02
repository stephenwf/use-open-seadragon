import { Viewer } from './viewer';
import { ControlOptions } from './control';
import { Viewport } from './viewport';
import {
  TiledImageSpecifier,
  TileSourceSpecifier,
} from './tile-sources/complex-tile-source';
import { TiledImage } from './tiled-image';

export type NavigatorOptions = { viewer: Viewer } & Partial<{
  id: string;
  autoFade: boolean;
  element: HTMLElement;
  tabIndex: number;
  position: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT';
  animationTime: number;
  autoResize: boolean;
  background: string;
  opacity: number;
  borderColor: string;
  displayRegionColor: string;
  controlOptions: ControlOptions;
}>;

export interface Navigator extends Viewer {
  updateSize(): void;
  setFlip(state: boolean): this;
  setDisplayTransform(rule: string): void;
  update(viewport: Viewport): void;
  addTiledImage(
    options: {
      tileSource: TileSourceSpecifier;
      originalTiledImage: TiledImage;
      index: number;
    } & Partial<TiledImageSpecifier>
  ): void;
}

export interface NavigatorStatic {
  new (options: NavigatorOptions): Navigator;
}
