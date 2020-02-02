import { Tile } from './tile';

export interface ImageRecord {
  _tiles: Tile[]; // Not sure if these are used, added private property to access if needed.
  getImage(): HTMLImageElement;
  getRenderedContext(): CanvasRenderingContext2D;
  setRenderedContext(context: CanvasRenderingContext2D): void;
  addTile(tile: Tile): void;
  removeTile(tile: Tile): void;
  getTileCount(): number;
}

export interface ImageRecordStatic {
  new (options: { image: HTMLImageElement }): ImageRecord;
}
