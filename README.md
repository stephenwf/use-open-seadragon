# use-open-seadragon



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

