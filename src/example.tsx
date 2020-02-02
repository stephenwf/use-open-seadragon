import React, { useEffect, useMemo, useState } from 'react';
import { ViewerProvider } from './viewer-context';
import { useViewerContext } from './hooks/use-viewer-context';
import { OpenSeadragonViewer } from './components/OpenSeadragonViewer';
import { useZoom } from './hooks/use-zoom';
import { useViewerEvent } from './hooks/use-viewer-event';

const HookExample: React.FC = () => {
  const { viewer } = useViewerContext();
  const { zoomIn, zoomOut } = useZoom();
  const [x, setX] = useState(0);

  useViewerEvent('update-viewport', () => {
    setX(viewer.viewport.getBoundsNoRotate().x);
  });

  return (
    <>
      <div>{x}</div>
      <button onClick={zoomOut}>-</button>
      <button onClick={zoomIn}>+</button>
    </>
  );
};

export const Example: React.FC = () => {
  const [image, setImage] = useState(
    'https://iiif.library.nuigalway.ie/loris/p135%2Fp135_memoir_003.tif'
  );

  const tiles = useMemo(() => {
    return [
      {
        tileSource: {
          profile: [
            'http://iiif.io/api/image/2/level2.json',
            {
              supports: [
                'canonicalLinkHeader',
                'profileLinkHeader',
                'mirroring',
                'rotationArbitrary',
                'regionSquare',
                'sizeAboveFull',
              ],
              qualities: ['default', 'color', 'gray', 'bitonal'],
              formats: ['jpg', 'png', 'gif', 'webp'],
            },
          ],
          protocol: 'http://iiif.io/api/image',
          sizes: [],
          height: 3306,
          width: 2531,
          '@context': 'http://iiif.io/api/image/2/context.json',
          '@id': image,
          crossOriginPolicy: false,
          ajaxWithCredentials: false,
          useCanvas: true,
          tileSizePerScaleFactor: {},
          tileSize: 1024,
          maxLevel: 9,
        },
      },
    ];
  }, [image]);

  const [size, setSize] = useState(500);

  useEffect(() => {
    setTimeout(() => {
      setImage(
        'https://iiif.library.nuigalway.ie/loris/p135%2Fp135_memoir_007.tif'
      );
    }, 1000);
  });

  return (
    <ViewerProvider>
      <HookExample />
      <button onClick={() => setSize(size === 500 ? 800 : 500)}>size</button>
      <OpenSeadragonViewer width={500} height={size} tileSources={tiles} />
    </ViewerProvider>
  );
};
