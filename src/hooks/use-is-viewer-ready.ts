import { useLayoutEffect, useState } from 'react';
import { useReadyState } from './use-ready-state';
import { useInterval } from './use-interval';
import { Viewer } from '../types/viewer';
import { useOsdEventHandler } from './use-osd-event-handler';

export function useIsViewerReady(viewer?: Viewer) {
  const [isReady, setIsReady] = useReadyState();
  const [intervalCounter, setIntervalCounter] = useState(0);

  // Check for resize.
  useOsdEventHandler(
    viewer,
    'resize',
    () => {
      setIsReady(true);
    },
    !isReady
  );

  // Check upfront if its working.
  useLayoutEffect(() => {
    if (viewer && !isReady) {
      const { x } = viewer.viewport._contentSize;
      if (x > 1) {
        setIsReady(true);
        return;
      }
    }
  }, [isReady, setIsReady, viewer]);

  // If after 250ms it's still not working, we do a brute force check.
  useInterval(
    () => {
      if (viewer) {
        const { x } = viewer.viewport._contentSize;
        if (x > 1) {
          setIsReady(true);
          return;
        }
      }
      setIntervalCounter(c => c + 1);
    },
    250,
    !isReady && intervalCounter < 20
  );

  return [isReady, setIsReady] as const;
}
