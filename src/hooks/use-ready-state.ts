import React, { useState } from 'react';
import { ViewerContext } from '../viewer-context';

export function useReadyState() {
  const [isReady, setIsReady] = useState(false);
  const ctx = React.useContext(ViewerContext);

  if (ctx) {
    return [ctx.isReady, ctx.setIsReady] as const;
  }
  return [isReady, setIsReady] as const;
}
