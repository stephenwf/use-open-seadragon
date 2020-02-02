import React from 'react';
import { ViewerContext, ViewerContextValue } from '../viewer-context';

export function useViewerContext(): ViewerContextValue {
  const c = React.useContext(ViewerContext);
  if (!c) throw new Error('useCtx must be inside a Provider with a value');
  return c;
}
