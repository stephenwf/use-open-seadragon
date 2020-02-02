import { Viewer } from './types/viewer';
import React, { useMemo, useState } from 'react';

export type ViewerContextValue = {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
  isReady: boolean;
  setIsReady: (value: boolean) => void;
};

export const ViewerContext = React.createContext<
  ViewerContextValue | undefined
>(undefined);

export const ViewerProvider: React.FC = ({ children }) => {
  const [viewer, setViewer] = useState();
  const [isReady, setIsReady] = useState(false);

  return (
    <ViewerContext.Provider
      value={useMemo(() => ({ viewer, setViewer, isReady, setIsReady }), [
        isReady,
        viewer,
      ])}
    >
      {children}
    </ViewerContext.Provider>
  );
};
