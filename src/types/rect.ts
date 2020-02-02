import { Point, SimplePoint } from './point';

export type SimpleRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;

  clone(): Rect;
  equals(rectangle: Rect | SimpleRect): boolean;
  getAspectRatio(): number;
  getBottomLeft(): Point;
  getBoundingBox(): Rect;
  getCenter(): Point;
  getIntegerBoundingBox(): Rect;
  getSize(): Point;
  getTopLeft(): Point;
  getTopRight(): Point;
  intersection(rect: Rect | SimpleRect): Rect;
  rotate(degrees: number, pivot?: Point | SimplePoint): Rect;
  times(factor: number): Rect;
  toString(): string;
  translate(delta: Point | SimplePoint): Rect;
  union(rect: Rect | SimpleRect): Rect;
}

export interface RectStatic {
  new (
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    degrees?: number
  ): Rect;
  fromSummits(topLeft: number, topRight: number, bottomLeft: number): Rect;
}
