import { EventHandler, PayloadTypes } from '../types/util';
import { Viewer, ViewerEvents } from '../types/viewer';
import { useOsdEventHandler } from './use-osd-event-handler';
import { useViewerContext } from './use-viewer-context';

export function useViewerEvent<
  Name extends PayloadTypes<ViewerEvents>,
  Callback extends (event: EventHandler<Name, ViewerEvents, Viewer>) => void
>(eventName: Name, callback: Callback, active: boolean = true) {
  const { viewer, isReady } = useViewerContext();

  useOsdEventHandler(viewer, eventName, callback, active && isReady);
}
