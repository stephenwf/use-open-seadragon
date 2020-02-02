import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useViewerContext } from '../hooks/use-viewer-context';
import { Placement } from '../types/members';
import { Point } from '../types/point';
import { OpenSeadragon } from '../open-seadragon';

type OverlayProps = {
  x: number;
  y: number;
} & Partial<{
  placement: Placement;
  onDraw: (position: Point, size: Point, element: HTMLElement) => void;
  checkResize: boolean;
  width: number;
  height: number;
  rotationMode: number;
}>;

export const Overlay: React.FC<OverlayProps> = ({
  x,
  y,
  height,
  width,
  children,
  ...props
}) => {
  const { viewer, isReady } = useViewerContext();
  const rootElemRef = useRef(document.createElement('div'));

  useEffect(() => {
    if (isReady) {
      viewer.addOverlay({
        element: rootElemRef.current,
        location:
          !height || !width
            ? new OpenSeadragon.Point(x, y)
            : new OpenSeadragon.Rect(x, y, width, height),
        ...props,
      });
      const rootEl = rootElemRef.current;
      return () => {
        if (viewer) {
          viewer.removeOverlay(rootEl);
        }
      };
    }
    return;
    // eslint-disable-next-line
  }, [viewer, isReady]);

  useEffect(() => {
    if (isReady) {
      const overlay = viewer.getOverlayById(rootElemRef.current);
      overlay.update(
        !height || !width
          ? new OpenSeadragon.Point(x, y)
          : new OpenSeadragon.Rect(x, y, width, height)
      );
    }
  }, [height, viewer, width, x, y]);

  return ReactDOM.createPortal(children, rootElemRef.current);
};
