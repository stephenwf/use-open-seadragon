import { LiteralTileSourceConfiguration, TileSource } from './tile-source';

type IIIFTileSourceEvents = never;

export declare type ImageSize = { width: number; height: number };

export declare type ImageTile = {
  width: number;
  height?: number;
  scaleFactors: number[];
  maxWidth?: number;
  maxHeight?: number;
};

export type ImageFormats =
  | 'jpg'
  | 'tif'
  | 'png'
  | 'gif'
  | 'jp2'
  | 'pdf'
  | 'webp';

// @todo add in IIIF-Vocabulary
export declare type ImageProfile =
  | string
  | {
      '@context'?: 'http://iiif.io/api/image/2/context.json';
      '@type'?: 'iiif:ImageProfile';
      type?: 'ImageProfile';
      formats?: ImageFormats[];
      qualities?: string[];
      supports?: string[];
      maxArea?: number;
      maxHeight?: number;
      maxWidth?: number;
    };

export type ImageService = (
  | {
      '@id': string;
    }
  | {
      id: string;
    }
) & {
  '@context'?: string | string[];
  profile: ImageProfile | ImageProfile[];
  protocol?: string;
  width?: number | null;
  height?: number | null;
  sizes?: ImageSize[];
  tiles?: ImageTile[];
};

type IIIFTileSourceOptions = {
  height: number;
  width: number;
} & Partial<
  {
    format: ImageFormats;
    /** @deprecated */
    tile_width: number;
    /** @deprecated */
    tile_height: number;
    scale_factors: number;
  } & ImageService &
    Partial<LiteralTileSourceConfiguration>
>;

export interface IIIFTileSource
  extends TileSource<IIIFTileSource, IIIFTileSourceEvents> {}

export interface IIIFTileSourceStatic {
  new (options: IIIFTileSourceOptions): TileSource;
}
