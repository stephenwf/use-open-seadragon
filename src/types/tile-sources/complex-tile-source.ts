// Completely made up, to cover polymorphic signature of tile source property.
import { Rect, SimpleRect } from '../rect';
import { Placement } from '../members';
import { OpenSeadragonOptions } from '../config/options';
import { TiledImage } from '../tiled-image';

// The TileSource specifier. A String implies a url used to determine the
// tileSource implementation based on the file extension of url. JSONP is
// implied by *.js, otherwise the url is retrieved as text and the resulting
// text is introspected to determine if its json, xml, or text and parsed.
// An Object implies an inline configuration which has a single property
// sufficient for being able to determine tileSource implementation. If the
// object has a property which is a function named 'getTileUrl', it is treated
// as a custom TileSource.
export type TileSourceSpecifier = string | any | { getTileUrl: () => string };

export type TiledImageSpecifier = {
  replace: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  fitBounds: Rect | SimpleRect;
  fitBoundsPlacement: Placement;
  clip: Rect | SimpleRect;
  opacity: number;
  preload: boolean;
  degrees: number;
  compositeOperation: string;
  crossOriginPolicy: string;
  ajaxWithCredentials: boolean;
  loadTilesWithAjax: any;
  error: (event: { message: string; source: any }) => void;
  success: (item: TiledImage) => void;
  collectionImmediately: boolean;
  placeholderFillStyle: OpenSeadragonOptions['placeholderFillStyle'];
};

export type ComplexTileSource =
  | TileSourceSpecifier
  | TiledImageSpecifier
  | Array<TiledImageSpecifier | TileSourceSpecifier>;
