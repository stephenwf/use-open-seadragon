import { EventSource } from '../types/event-source';
import { EventHandler, PayloadTypes } from '../types/util';
import { useLayoutEffect } from 'react';

export function useOsdEventHandler<
  Events extends { type: any; payload: any },
  Source extends EventSource<Events>,
  Name extends PayloadTypes<Events>,
  Callback extends (event: EventHandler<Name, Events, Source>) => void
>(
  source: Source | undefined,
  eventName: Name,
  callback: Callback,
  active: boolean = true
) {
  useLayoutEffect(() => {
    if (source && active) {
      source.addHandler(eventName, callback);
      return () => source.removeHandler(eventName, callback);
    }
    return;
  }, [active, callback, eventName, source]);
}
