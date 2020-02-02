# use-open-seadragon
Hook for easily using OpenSeadragon with React. Declarative API with full Typescript 
definitions (including all of OpenSeadragon types).

```
npm install use-open-seadragon --save
```

```
yarn add use-open-seadragon
```

Optionally, if you are using the React hooks, you can install React and ReactDOM. OpenSeadragon itself is bundled in 
the UMD if you want to [grab it directly](http://unpkg.com/use-open-seadragon) to embed.

## Features
- Fully typed OpenSeadragon
- Hooks sagely access to the viewer, viewport etc.
- Wrapper around OSD events for React (and [100% type support](https://github.com/stephenwf/use-open-seadragon/blob/master/src/types/viewer.ts#L32-L461) for the OSD API)
- Small: 2kb extra on-top of OSD

## Examples

Simple hook usage to display a viewer:
```jsx
import React from "react";
import { useOpenSeadragon } from "use-open-seadragon";

const tile = {
  type: "image",
  url:
    "https://openseadragon.github.io/example-images/grand-canyon-landscape-overlooking.jpg"
};

function Viewer({ tiles }) {
  const [ref] = useOpenSeadragon(tiles);

  return (
    <div ref={ref} style={{ height: 600, width: 800, position: "relative" }} />
  );
}
```
[![Edit use-open-seadragon-simple](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-open-seadragon-overlay-wi8lb?fontsize=14&hidenavigation=1&theme=dark)

Add React component overlays (requires ViewerProvider around root, similar to Redux):
```jsx
import React, { useState } from "react";
import { useOpenSeadragon, ViewerProvider, Overlay } from "use-open-seadragon";

const tile = {
  type: "image",
  url:
    "https://openseadragon.github.io/example-images/grand-canyon-landscape-overlooking.jpg"
};

function Viewer({ tiles }) {
  const [ref] = useOpenSeadragon(tiles);
  const [count, setCount] = useState(0);

  return (
    <>
      <div ref={ref} style={{ height: 600, width: 800, position: "relative" }}>
        <Overlay x={0.5} y={0.5}>
          <div style={{ background: "#fff" }}>
            <h1>Hello overlay</h1>
            <p>State works too: {count}</p>
          </div>
        </Overlay>
      </div>
      <button onClick={() => setCount(c => c + 1)}>incr counter</button>
    </>
  );
}

export default function App() {
  return (
    <ViewerProvider>
      <Viewer tiles={tile} />
    </ViewerProvider>
  );
}
```
[![Edit use-open-seadragon-overlay](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-open-seadragon-overlay-ir64g?fontsize=14&hidenavigation=1&theme=dark)

### Using events
In this example we are subscribing to "update-viewport" and grabbing some values from the viewport and
setting them on state. These are then returned as an Overlay which can be rendered inside of the viewer.
```jsx
import { Overlay, useViewerEvent } from "use-open-seadragon";

function CurrentPosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useViewerEvent("update-viewport", ev => {
    setX(ev.eventSource.viewport.getBoundsNoRotate().x);
    setY(ev.eventSource.viewport.getBoundsNoRotate().y);
  });

  return (
    <Overlay>
      <div style={{ background: "#fff" }}>
        {x}, {y}
      </div>
    </Overlay>
  );
}
```
You will get completion for [all](https://github.com/stephenwf/use-open-seadragon/blob/master/src/types/viewer.ts#L32-L461) [of](https://github.com/stephenwf/use-open-seadragon/blob/master/src/types/mouse-tracker.ts#L21-L163) [the](https://github.com/stephenwf/use-open-seadragon/blob/master/src/types/button.ts#L6-L42) events dispatched.

This library comes with a few pre-canned hooks that will probably grow. But it also comes now with all of the building 
blocks you would need to create custom hooks around the viewer.

## OpenSeadragon without React
If you want OpenSeadragon without react, but with all the types then you can try them out by importing:
```tsx
import { OpenSeadragon } from 'use-open-seadragon/open-seadragon';
```

and then using it as you would the `openseadragon` package. These types should be quite complete, but are still 
unstable. If they are tested to work well, then they can be published to NPM as `@types/openseadragon` on definitely typed. 
