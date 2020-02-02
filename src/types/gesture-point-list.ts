import { GesturePoint } from './gesture-point';

export enum GestureButtonFlags {
  NONE = 0,
  PRIMARY = 1,
  SECONDARY = 2,
  AUX = 4,
  X1 = 8,
  X2 = 16,
  PEN_ERASER = 32,
}

export interface GesturePointList {
  buttons: number;
  captureCount: number;
  clicks: number;
  contacts: number;
  type: string;
  add(gesturePoint: GesturePoint): number;
  addContact(): void;
  asArray(): GesturePoint[];
  getById(id: number): GesturePoint | null;
  getByIndex(index: number): GesturePoint | null;
  getLength(): number;
  getPrimary(): GesturePoint | null;
  removeById(id: number): number;
  removeContact(): void;
}

export interface GesturePointListStatic {
  new (type: string): GesturePointList;
}
