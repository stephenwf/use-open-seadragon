import { BaseEvent, EventSource } from '../event-source';
import { AjaxHeaders, NonFunctionProperties } from '../util';
import { Point } from '../point';
import { Rect } from '../rect';

type TileSourceEvents<Self> =
  | {
      type: 'open-failed';
      payload: {
        message: string;
        source: string;
      };
    }
  | {
      type: 'ready';
      payload: {
        tileSource: Self;
      };
    };

export type LiteralTileSourceConfiguration = {
  width: number;
  height: number;
  tileOverlap: number;
  minLevel: number;
  maxLevel: number;
} & ({ tileSize: number } | { tileWidth: number; tileHeight: number });

type TileSourceConfiguration =
  | Partial<
      {
        url: string;
        referenceStripThumbnailUrl: string;
        // @todo make this a `ready` event payload.
        success: (event: any) => void;
        ajaxWithCredentials: boolean;
        ajaxHeaders: AjaxHeaders;
      } & LiteralTileSourceConfiguration
    >
  | LiteralTileSourceConfiguration;

export interface TileSource<
  Self extends TileSource = any,
  Events extends BaseEvent = never
> extends EventSource<Events | TileSourceEvents<Self>> {
  aspectRatio: number;
  dimensions: Point;
  maxLevel: number;
  minLevel: number;
  ready: boolean;
  tileOverlap: number;
  getClosestLevel(): number;
  getImageInfo(url: string): void;
  getLevelScale(level: number): number;
  getNumTiles(level: number): number;
  getPixelRatio(level: number): number;
  getTileAjaxHeaders(level: number, x: number, y: number): AjaxHeaders;
  getTileAtPoint(level: number, point: Point): Point;
  getTileBounds(level: number, x: number, y: number, isSource?: boolean): Rect;
  getTileHeight(level: number): number;
  getTileUrl(level: number, x: number, y: number): string;
  getTileWidth(level: number): number;
  tileExists(level: number, x: number, y: number): boolean;
}

export interface TileSourceStatic {
  new (
    width: number,
    height: number,
    tileSize: number,
    tileOverlap: number,
    minLevel: number,
    maxLevel: number,
    ...readyCallbacks: Function[]
  ): TileSource;
  new (
    options: NonFunctionProperties<TileSource> & TileSourceConfiguration,
    ...readyCallbacks: Function[]
  ): TileSource;
}
