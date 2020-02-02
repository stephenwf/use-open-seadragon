import { EventHandler } from './util';
import { EventSource } from './event-source';
import { ButtonState } from './members';
import { MouseTracker } from './mouse-tracker';

export type ButtonEvents =
  | {
      type: 'blur';
      payload: {
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'enter';
      payload: {
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'exit';
      payload: {
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'focus';
      payload: {
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'press';
      payload: {
        originalEvent: MouseEvent;
      };
    }
  | {
      type: 'release';
      payload: {
        originalEvent: MouseEvent;
      };
    };

export interface Button extends EventSource<ButtonEvents> {
  currentState: ButtonState;
  element: HTMLElement;
  fadeDelay: number;
  fadeLength: number;
  tracker: MouseTracker;
  enable(): void;
  disable(): void;
  notifyGroupEnter(): void;
  notifyGroupExit(): void;
}

export interface ButtonStatic {
  new (
    options: Partial<{
      element: HTMLElement;
      tooltip: string;
      srcRest: string;
      srcGroup: string;
      srcHover: string;
      srcDown: string;
      fadeDelay: number;
      fadeLength: number;
      onPress: (event: EventHandler<'press', ButtonEvents, Button>) => void;
      onRelease: (event: EventHandler<'release', ButtonEvents, Button>) => void;
      onClick: (event: EventHandler<'press', ButtonEvents, Button>) => void;
      onEnter: (event: EventHandler<'enter', ButtonEvents, Button>) => void;
      onExit: (event: EventHandler<'exit', ButtonEvents, Button>) => void;
      onFocus: (event: EventHandler<'focus', ButtonEvents, Button>) => void;
      onBlur: (event: EventHandler<'blur', ButtonEvents, Button>) => void;
    }>
  ): Button;
}
