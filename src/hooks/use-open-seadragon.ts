import {
  TiledImageSpecifier,
  TileSourceSpecifier,
} from '../types/tile-sources/complex-tile-source';
import { useCallback, useLayoutEffect, useRef } from 'react';
import { OpenSeadragon } from '../open-seadragon';
import { useViewerState } from './use-viewer-state';
import { useIsViewerReady } from './use-is-viewer-ready';
import { TiledImage } from '../types/tiled-image';
import { UserOpenSeadragonOptions } from '../types/config/options';

export function useOpenSeadragon(
  tileSources: Array<
    { tileSource: TileSourceSpecifier; index: number } & Partial<
      TiledImageSpecifier
    >
  > = [],
  osdOptions: UserOpenSeadragonOptions = {}
) {
  const osdRef = useRef<HTMLDivElement | null>(null);
  const [viewer, setViewer] = useViewerState();
  const [isReady, setIsReady] = useIsViewerReady(viewer);

  const asyncAddTile = useCallback(
    (
      options: { tileSource: TileSourceSpecifier; index: number } & Partial<
        TiledImageSpecifier
      >
    ): Promise<void> => {
      return new Promise((success, err) => {
        if (!viewer) {
          return;
        }

        try {
          viewer.addTiledImage({
            ...options,
            success: (item: TiledImage) => {
              success();
              if (options.success) {
                options.success(item);
              }
            },
          });
        } catch (e) {
          err(e);
        }
      });
    },
    [viewer]
  );

  const goHome = useCallback(() => {
    if (viewer) {
      viewer.viewport.goHome(true);
    }
  }, [viewer]);

  useLayoutEffect(() => {
    setViewer(
      new OpenSeadragon({
        element: osdRef.current,
        ...osdOptions,
      })
    );
  }, [osdOptions, setViewer]);

  useLayoutEffect(() => {
    if (viewer) {
      Promise.all(tileSources.map(tileSource => asyncAddTile(tileSource))).then(
        goHome
      );
    }

    return () => {
      if (viewer) {
        setIsReady(false);
        viewer.close();
      }
    };
  }, [asyncAddTile, goHome, setIsReady, tileSources, viewer]);

  return [osdRef, { isReady, goHome }] as const;
}
