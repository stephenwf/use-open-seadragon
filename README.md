# FESK Typescript
FESK + Typescript boilerplate. 

## Installation
Change package.json:
```json
{
  "name": "{PACKAGE_NAME}",
  "main": "dist/umd/{PACKAGE_NAME}.js"
}
```

## Customisations
Some customisations.

### Remove server (libraries)
```json
{
  "start": "fesk-start --cjs --noServer"
}
```
 
### Storybook
Create `FILENAME.stories.tsx`
```typescript
import React from 'react';

export default { title: 'CATEGORY LABEL| COMPONENT_NAME' };

export const ExampleName: React.FC = () => {
  return <div>Some story</div>
};
```

Example of custom configuration: https://github.com/digirati-co-uk/capture-models/tree/feature/context-behaviours/.storybook

### Ports
Package json:
```json
{
  "fesk": {
    "typescript": true,
    "port": 5000,
    "metalsmith": {
      "nunjucks": {
        "liveServerPort": 35735
      }
    }
  }
}
```
