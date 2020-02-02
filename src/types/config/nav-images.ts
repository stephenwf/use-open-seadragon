type NavigationImageSelection = {
  REST: string;
  GROUP: string;
  HOVER: string;
  DOWN: string;
};

export type NavImages = {
  zoomIn: NavigationImageSelection;
  zoomOut: NavigationImageSelection;
  home: NavigationImageSelection;
  fullpage: NavigationImageSelection;
  rotateleft: NavigationImageSelection;
  rotateright: NavigationImageSelection;
  flip: NavigationImageSelection;
  previous: NavigationImageSelection;
  next: NavigationImageSelection;
};

export type UserNavImages = {
  zoomIn?: Partial<NavigationImageSelection>;
  zoomOut?: Partial<NavigationImageSelection>;
  home?: Partial<NavigationImageSelection>;
  fullpage?: Partial<NavigationImageSelection>;
  rotateleft?: Partial<NavigationImageSelection>;
  rotateright?: Partial<NavigationImageSelection>;
  flip?: Partial<NavigationImageSelection>;
  previous?: Partial<NavigationImageSelection>;
  next?: Partial<NavigationImageSelection>;
};
