import { EventHandler } from './util';
import { Point } from './point';
import { GesturePoint } from './gesture-point';
import { GesturePointList } from './gesture-point-list';

type BaseEvent = {
  preventDefaultAction(): void;
};
type CustomMouseEvent<Custom> = {
  pointerType: string;
  originalEvent: MouseEvent;
  isTouchEvent: boolean;
  position: Point;
} & BaseEvent &
  Custom;
type CustomKeyboardEvent<Custom> = {
  originalEvent: KeyboardEvent;
} & BaseEvent &
  Custom;

type MouseTrackerEvents =
  | {
      type: 'enter';
      payload: CustomMouseEvent<{
        buttons: number;
        pointers: number;
        insideElementPressed: boolean;
        buttonDownAny: boolean;
      }>;
    }
  | {
      type: 'exit';
      payload: CustomMouseEvent<{
        buttons: number;
        pointers: number;
        insideElementPressed: boolean;
        buttonDownAny: boolean;
      }>;
    }
  | {
      type: 'press';
      payload: CustomMouseEvent<{
        buttons: number;
      }>;
    }
  | {
      type: 'non-primary-press';
      payload: CustomMouseEvent<{
        button: -1 | 0 | 1 | 2 | 3 | 4 | 5;
        buttons: number;
      }>;
    }
  | {
      type: 'release';
      payload: CustomMouseEvent<{
        buttons: number;
        insideElementPressed: boolean;
        insideElementReleased: boolean;
      }>;
    }
  | {
      type: 'non-primary-release';
      payload: CustomMouseEvent<{
        buttons: number;
        button: number;
      }>;
    }
  | {
      type: 'move';
      payload: CustomMouseEvent<{
        buttons: number;
      }>;
    }
  | {
      type: 'scroll';
      payload: CustomMouseEvent<{
        scroll: number;
        shift: boolean;
      }>;
    }
  | {
      type: 'click';
      payload: CustomMouseEvent<{
        quick: boolean;
        shift: boolean;
      }>;
    }
  | {
      type: 'dbl-click';
      payload: CustomMouseEvent<{
        shift: boolean;
      }>;
    }
  | {
      type: 'drag';
      payload: CustomMouseEvent<{
        buttons: number;
        delta: Point;
        speed: number;
        direction: number;
        shift: boolean;
      }>;
    }
  | {
      type: 'drag-end';
      payload: CustomMouseEvent<{
        speed: number;
        direction: number;
        shift: boolean;
      }>;
    }
  | {
      type: 'pinch';
      payload: CustomMouseEvent<{
        gesturePoints: GesturePoint[];
        lastCenter: Point;
        center: Point;
        lastDistance: number;
        distance: number;
        shift: boolean;
      }>;
    }
  | {
      type: 'stop';
      payload: CustomMouseEvent<{
        buttons: number;
      }>;
    }
  | {
      type: 'key-down';
      payload: CustomKeyboardEvent<{
        keyCode: number;
        ctrl: boolean;
        shift: boolean;
        alt: boolean;
        meta: boolean;
      }>;
    }
  | {
      type: 'key';
      payload: CustomKeyboardEvent<{
        keyCode: number;
        ctrl: boolean;
        shift: boolean;
        alt: boolean;
        meta: boolean;
      }>;
    }
  | {
      type: 'key-up';
      payload: CustomKeyboardEvent<{
        keyCode: number;
        ctrl: boolean;
        shift: boolean;
        alt: boolean;
        meta: boolean;
      }>;
    }
  | {
      type: 'focus';
      payload: CustomKeyboardEvent<{}>;
    }
  | { type: 'blur'; payload: CustomKeyboardEvent<{}> };

export type MouseTrackerHandlers<UD = any> = {
  enterHandler: (
    event: EventHandler<'enter', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  exitHandler: (
    event: EventHandler<'exit', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  pressHandler: (
    event: EventHandler<'press', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  nonPrimaryPressHandler: (
    event: EventHandler<
      'non-primary-press',
      MouseTrackerEvents,
      MouseTracker,
      UD
    >
  ) => void;
  releaseHandler: (
    event: EventHandler<'release', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  nonPrimaryReleaseHandler: (
    event: EventHandler<
      'non-primary-release',
      MouseTrackerEvents,
      MouseTracker,
      UD
    >
  ) => void;
  moveHandler: (
    event: EventHandler<'move', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  scrollHandler: (
    event: EventHandler<'scroll', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  clickHandler: (
    event: EventHandler<'click', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  stopHandler: (
    event: EventHandler<'stop', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  dblClickHandler: (
    event: EventHandler<'dbl-click', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  dragHandler: (
    event: EventHandler<'drag', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  dragEndHandler: (
    event: EventHandler<'drag-end', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  pinchHandler: (
    event: EventHandler<'pinch', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  keyDownHandler: (
    event: EventHandler<'key-down', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  keyUpHandler: (
    event: EventHandler<'key-up', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  keyHandler: (
    event: EventHandler<'key', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  focusHandler: (
    event: EventHandler<'focus', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
  blurHandler: (
    event: EventHandler<'blur', MouseTrackerEvents, MouseTracker, UD>
  ) => void;
};

export type MouseTrackerOptions<UD> = {
  element: HTMLElement | string;
} & Partial<{
  startDisabled: boolean;
  clickTimeThreshold: number;
  clickDistThreshold: number;
  dbClickTimeThreshold: number;
  dbClickDistThreshold: number;
  stopDelay: number;
  userData: UD;
}> &
  Partial<MouseTrackerHandlers<UD>>;

export interface MouseTracker<UD = any> extends MouseTrackerHandlers {
  clickTimeThreshold: number;
  clickDistThreshold: number;
  dbClickTimeThreshold: number;
  dbClickDistThreshold: number;
  element: HTMLElement;
  destroy(): void;
  getActivePointerCount(): number;
  getActivePointersListByType(type: string): GesturePointList;
  getActivePointersListsExceptType(type: string): GesturePointList[];
  isTracking(): boolean;
  setTracking(track: MouseTracker): MouseTracker;
}

export interface MouseTrackerStatic<UD> {
  new (options: MouseTrackerOptions<UD>): MouseTracker;
}
