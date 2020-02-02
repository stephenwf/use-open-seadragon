import { Rect } from './rect';

export interface DisplayRect extends Rect {
  minLevel: number;
  maxLevel: number;
}

export interface DisplayRectStatic {
  new (
    x: number,
    y: number,
    width: number,
    height: number,
    minLevel: number,
    maxLevel: number
  ): DisplayRect;
}
