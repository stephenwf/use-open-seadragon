import { PartialOrNull } from '../util';

export type GestureSettings = {
  scrollToZoom: boolean;
  clickToZoom: boolean;
  dblClickToZoom: boolean;
  pinchToZoom: boolean;
  flickEnabled: boolean;
  flickMinSpeed: number;
  flickMomentum: number;
};

export type UserGestureSettings = PartialOrNull<GestureSettings>;
