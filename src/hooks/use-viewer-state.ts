import React, { useState } from 'react';
import { Viewer } from '../types/viewer';
import { ViewerContext } from '../viewer-context';

export function useViewerState() {
  const [viewer, setViewer] = useState<Viewer | undefined>();
  const ctx = React.useContext(ViewerContext);

  if (ctx) {
    return [ctx.viewer, ctx.setViewer] as const;
  }
  return [viewer, setViewer] as const;
}
