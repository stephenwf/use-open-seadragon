import { TileSource } from './tile-source';

type ImageTileSourceEvents = never;

type ImageTileSourceOptions = {
  url: string;
  buildPyramid?: boolean;
  crossOriginPolicy: string | boolean;
  ajaxWithCredentials: boolean;
  useCanvas: boolean;
};

export interface ImageTileSource
  extends TileSource<ImageTileSource, ImageTileSourceEvents> {
  getContext2D(
    level: number,
    x: number,
    y: number
  ): CanvasRenderingContext2D | null;
  supports(data: any, url?: string): boolean;
}

export interface ImageTileSourceStatic {
  new (options: ImageTileSourceOptions): TileSource;
}
