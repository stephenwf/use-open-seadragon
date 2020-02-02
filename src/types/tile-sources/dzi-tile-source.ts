import { DisplayRect } from '../display-rect';
import { Point } from '../point';
import { TileSource } from './tile-source';

export type DziEvents = never;

export interface DziTileSource extends TileSource<DziTileSource, DziEvents> {
  aspectRatio: number;
  dimensions: Point;
  maxLevel: number;
  minLevel: number;
  ready: boolean;
  tileOverlap: number;
  configure(): never;
}

export interface DziTileSourceStatic {
  new (
    width: number,
    height: number,
    tileSize: number,
    tileOverlap: number,
    tilesUrl?: string,
    fileFormat?: string,
    displayRects?: DisplayRect[]
  ): DziTileSource;

  new (config: {
    width: number;
    height: number;
    tileSize: number;
    tileOverlap: number;
    tilesUrl?: string;
    fileFormat?: string;
    displayRects?: DisplayRect[];
  }): DziTileSource;
}
