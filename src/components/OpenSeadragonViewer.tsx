import React, { useEffect } from 'react';
import { ComplexTileSource } from '../types/tile-sources/complex-tile-source';
import { Viewer } from '../types/viewer';
import { useOpenSeadragon } from '../hooks/use-open-seadragon';

type OpenSeadragonViewerProps = {
  width: number;
  height: number;
  tileSources?: ComplexTileSource;
  onImageLoaded?: (osd: Viewer, opts: any) => any;
  maxWidth?: number;
  maxHeight?: number;
  showControls?: boolean;
  getRef?: (ref: any) => void;
  osdOptions?: any;
  useMaxDimensions?: boolean;
  initialBounds?: any;
};

export const OpenSeadragonViewer: React.FC<OpenSeadragonViewerProps> = ({
  height,
  width,
  maxWidth,
  maxHeight,
  showControls,
  tileSources,
  useMaxDimensions = false,
}) => {
  const [ref, { goHome, isReady }] = useOpenSeadragon(tileSources);

  // Example, go home on resize.
  useEffect(() => {
    if (isReady) {
      goHome();
    }
  }, [goHome, height, isReady, width]);

  const heightRatio = maxHeight ? maxHeight / height : 1;
  const widthRatio = maxWidth ? maxWidth / width : 1;
  const scale = heightRatio < widthRatio ? heightRatio : widthRatio;
  const actualHeight =
    useMaxDimensions && maxHeight ? maxHeight : height * scale;
  const actualWidth = useMaxDimensions && maxWidth ? maxWidth : width * scale;

  return (
    <>
      <div
        style={{
          position: 'relative',
          height: actualHeight,
          width: '100%',
        }}
      >
        <div ref={ref} style={{ height: actualHeight, width: '100%' }} />
      </div>
    </>
  );
};
