import { TiledImage } from './tiled-image';
import { Viewer } from './viewer';
import { Rect } from './rect';
import { EventSource } from './event-source';

export type WorldEvents =
  | {
      type: 'add-item';
      payload: {
        eventSource: Viewer;
        item: TiledImage;
      };
    }
  | {
      type: 'item-index-change';
      payload: {
        item: TiledImage;
        previousIndex: number;
        newIndex: number;
      };
    }
  | {
      type: 'metrics-change';
      payload: {};
    }
  | {
      type: 'remove-item';
      payload: {
        item: TiledImage;
      };
    };

export interface World extends EventSource<WorldEvents> {
  arrange(options?: {
    immediately?: boolean;
    layout?: string;
    rows?: number;
    columns?: number;
    tileSize?: number;
    tileMargin?: number;
  }): void;
  draw(): void;
  getContentFactor(): number;
  getHomeBounds(): Rect;
  getIndexOfItem(item: TiledImage): number;
  getItemAt(index: number): TiledImage | undefined;
  getItemCount(): number;
  needsDraw(): boolean;
  removeAll(): void;
  removeItem(item: TiledImage): void;
  resetItems(): void;
  setAutoRefigureSize(value?: boolean): void;
  setItemIndex(item: TiledImage, index: number): void;
  update(): void;
}

export interface WorldStatic {
  new (options: { viewer: Viewer }): World;
}
