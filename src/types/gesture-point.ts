import { Point } from './point';

export type GesturePoint = {
  id: number;
  type: string;
  captured: boolean;
  isPrimary: boolean;
  insideElementPressed: boolean;
  insideElement: boolean;
  speed: number;
  direction: number;
  contactPos: Point;
  contactTime: number;
  lastPos: Point;
  lastTime: number;
  currentPos: Point;
  currentTime: number;
};
