export type SimplePoint = {
  x: number;
  y: number;
};

export interface Point {
  x: number;
  y: number;
  apply: (point: number) => number;
  clone(): Point;
  distanceTo(point: Point | SimplePoint): number;
  divide(factor: number): Point;
  equals(point: Point | SimplePoint): boolean;
  minus(point: Point | SimplePoint): Point;
  negate(): Point;
  plus(point: Point | SimplePoint): Point;
  rotate(degrees: number, pivot?: Point | SimplePoint): Point;
  squaredDistanceTo(point: Point | SimplePoint): number;
  times(factor: number): Point;
  toString(): string;
}

export interface PointStatic {
  new (x?: number, y?: number): Point;
}
