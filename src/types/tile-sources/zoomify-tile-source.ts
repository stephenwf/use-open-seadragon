import { LiteralTileSourceConfiguration, TileSource } from './tile-source';

type ZoomifySourceEvents = never;

export interface ZoomifySource
  extends TileSource<ZoomifySource, ZoomifySourceEvents> {
  supports(data: any, url?: string): boolean;
}

export interface ZoomifySourceStatic {
  new (
    config: {
      width: number;
      height: number;
      tilesUrl: string;
      tileSize?: number;
      tileOverlap?: number;
    } & Partial<LiteralTileSourceConfiguration>
  ): ZoomifySource;
}
