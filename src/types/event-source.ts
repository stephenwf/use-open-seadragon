import { PayloadTypes, PayloadWithUserData, UnpackEvent } from './util';

export interface BaseEvent {
  type: string;
  payload: any;
}

export interface EventSource<Events extends BaseEvent> {
  addHandler<Type extends PayloadTypes<Events>, UD = any>(
    eventName: Type,
    handler: (
      payload: UnpackEvent<PayloadWithUserData<Events, UD, this>, Type>
    ) => void,
    userData?: UD
  ): void;
  addOnceHandler<Type extends PayloadTypes<Events>, UD = any>(
    eventName: Type,
    handler: (
      payload: UnpackEvent<PayloadWithUserData<Events, UD, this>, Type>
    ) => void,
    userData?: UD,
    times?: number
  ): void;
  getHandler(eventName: PayloadTypes<Events>): void;
  removeAllHandlers(eventName: PayloadTypes<Events>): void;
  raiseEvent<Type extends PayloadTypes<Events>>(
    eventName: Type,
    eventArgs?: UnpackEvent<Events, Type>['payload']
  ): void;
  removeHandler<Type extends PayloadTypes<Events>, UD = any>(
    eventName: Type,
    handler: (
      payload: UnpackEvent<PayloadWithUserData<Events, UD, this>, Type>
    ) => void
  ): void;
}

export interface EventSourceStatic<Events extends BaseEvent = never> {
  new (): EventSource<Events>;
}
