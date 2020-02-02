import { Tile } from './tile';
import { TiledImage } from './tiled-image';

export interface TileRecord {
  tile: Tile;
  tiledImage: TiledImage;
}

export interface StaticTileRecord {
  new (options: { tile: Tile; tiledImage: TiledImage }): TileRecord;
}
