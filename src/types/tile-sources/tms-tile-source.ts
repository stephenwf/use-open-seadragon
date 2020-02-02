import { LiteralTileSourceConfiguration, TileSource } from './tile-source';

type TmsTileSourceEvents = never;

export interface TmsTileSource
  extends TileSource<TmsTileSource, TmsTileSourceEvents> {
  supports(data: any, url?: string): boolean;
}

export interface TmsTileSourceStatic {
  new (
    config?: {
      width?: number;
      height?: number;
      tileSize?: number;
      tileOverlap?: number;
      tilesUrl?: string;
    } & Partial<LiteralTileSourceConfiguration>
  ): TmsTileSource;
  new (
    width?: number,
    height?: number,
    tileSize?: number,
    tileOverlap?: number,
    tilesUrl?: string
  ): TmsTileSource;
}
