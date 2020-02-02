# use-open-seadragon
Hook for easily using OpenSeadragon with React. Declarative API with full Typescript 
definitions (including all of OpenSeadragon types).

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

## OpenSeadragon without React
If you want OpenSeadragon without react, but with all the types then you can try them out by importing:
```tsx
import { OpenSeadragon } from 'use-open-seadragon/open-seadragon';
```

and then using it as you would the `openseadragon` package. These types should be quite complete, but are still 
unstable. If they are tested to work well, then they can be published to NPM as `@types/openseadragon` on definitely typed. 
