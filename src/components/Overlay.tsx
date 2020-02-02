import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useViewerContext } from '../hooks/use-viewer-context';
import { Placement } from '../types/members';
import { Point } from '../types/point';

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
        location: { x, y, height, width },
        ...props,
      });
    }

    const rootEl = rootElemRef.current;
    return () => {
      viewer.removeOverlay(rootEl);
    };
    // eslint-disable-next-line
  }, [viewer, isReady]);

  useEffect(() => {
    const overlay = viewer.getOverlayById(rootElemRef.current);
    overlay.update({ x, y, height, width });
  }, [height, viewer, width, x, y]);

  return ReactDOM.createPortal(children, rootElemRef.current);
};
