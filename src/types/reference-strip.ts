import { Viewer } from './viewer';
import { MouseTracker } from './mouse-tracker';

export type ReferenceStripOptions = {
  viewer: Viewer;
} & Partial<{
  id: string;
  sizeRatio: number;
  scroll: 'horizontal' | 'vertical';
  position: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT';
  clickTimeThreshold: number;
  width: number;
  height: number;
}>;

export interface ReferenceStrip {
  currentPage: number;
  innerTracker: MouseTracker;
  id: string;
  sizeRatio: number;
  scroll: 'horizontal' | 'vertical';
  position: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT';
  clickTimeThreshold: number;
  width: number;
  height: number;
  panelHeight: number;
  panelWidth: number;
  panels: HTMLElement[];
  minPixelRatio: number;
  miniViewers: any; // ???
  setFocus(page: number): void;
  update(): void;
  destroy(): void;
}

export interface ReferenceStripStatic {
  new (options: ReferenceStripOptions): ReferenceStrip;
}
