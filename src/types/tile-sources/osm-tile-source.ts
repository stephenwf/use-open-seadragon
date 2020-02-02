import { LiteralTileSourceConfiguration, TileSource } from './tile-source';

type OsmTileSourceEvents = never;

export interface OsmTileSource
  extends TileSource<OsmTileSource, OsmTileSourceEvents> {
  supports(data: any, url?: string): boolean;
}

export interface OsmTileSourceStatic {
  new (
    config?: {
      width?: number;
      height?: number;
      tileSize?: number;
      tileOverlap?: number;
      tilesUrl?: string;
    } & Partial<LiteralTileSourceConfiguration>
  ): OsmTileSource;
  new (
    width?: number,
    height?: number,
    tileSize?: number,
    tileOverlap?: number,
    tilesUrl?: string
  ): OsmTileSource;
}
