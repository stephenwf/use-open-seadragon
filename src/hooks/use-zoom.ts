import { useMemo } from 'react';
import { useViewerContext } from './use-viewer-context';

export function useZoom() {
  const { viewer, isReady } = useViewerContext();

  return useMemo(
    () => ({
      zoomIn: () => (isReady ? viewer.viewport.zoomBy(1 / 0.7) : null),
      zoomOut: () => (isReady ? viewer.viewport.zoomBy(0.7) : null),
    }),
    [isReady, viewer]
  );
}
