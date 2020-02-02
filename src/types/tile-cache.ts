import { Tile } from './tile';
import { TiledImage } from './tiled-image';

export interface TileCache {
  cacheTile(options: {
    tile: Tile;
    image: HTMLImageElement;
    tiledImage: TiledImage;
    cutoff?: number;
  }): void;
  clearTilesFor(tiledImage: TiledImage): void;
  numTilesLoaded(): number;
}

export interface TileCacheStatic {
  new (options?: { maxImageCacheCount?: number }): TileCache;
}
