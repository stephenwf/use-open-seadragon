# use-open-seadragon



```jsx
import React from "react";
import { useOpenSeadragon } from "use-open-seadragon";
import exampleTileSource from "./exampleTileSource";

function Viewer({ tiles }) {
  const [ref] = useOpenSeadragon(tiles);

  return (
    <div ref={ref} style={{ height: 600, width: 800, position: "relative" }} />
  );
}

export default function App() {
  return <Viewer tiles={exampleTileSource} />;
}
```

