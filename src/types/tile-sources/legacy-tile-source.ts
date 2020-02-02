import { TileSource } from './tile-source';

type LegacyTileSourceEvents = never;

export interface LegacyTileSource
  extends TileSource<LegacyTileSource, LegacyTileSourceEvents> {
  supports(data: any, url?: string): boolean;
}

export interface LegacyTileSourceStatic {
  new (
    levels: Array<{
      url: string;
      width: number;
      height: number;
    }>
  ): LegacyTileSource;
}
