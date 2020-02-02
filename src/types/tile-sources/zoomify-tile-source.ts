import { LiteralTileSourceConfiguration, TileSource } from './tile-source';

type ZoomifyTileSourceEvents = never;

export interface ZoomifyTileSource
  extends TileSource<ZoomifyTileSource, ZoomifyTileSourceEvents> {
  supports(data: any, url?: string): boolean;
}

export interface ZoomifyTileSourceStatic {
  new (
    config: {
      width: number;
      height: number;
      tilesUrl: string;
      tileSize?: number;
      tileOverlap?: number;
    } & Partial<LiteralTileSourceConfiguration>
  ): ZoomifyTileSource;
}
