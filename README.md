# react-color-skycons

color-skycons as React components

This is a fork of the awesome [react-skycons](https://github.com/roadmanfong/react-skycons)
from Fong Kuanghuei (waneblade@gmail.com) implementing the [color-skycons](https://github.com/maxdow/skycons)
from Maxime Warnier.

## Installation

Install via [npm](https://www.npmjs.com/package/react-color-skycons)

```cli
$ yarn add react-color-skycons
```

## Quick Example

```js
import React from 'react'
import ColorSkycons, { ColorSkyconsType } from 'react-color-skycons'

function Demo() {
  return (
    <ColorSkycons
      type={ColorSkyconsType.CLEAR_DAY}
      animate={true}
      size={24}
      resizeClear={true}
      {...svgProps}
    />
  )
}
```

## Build

```cli
yarn run build
```

## Author

Original: Fong Kuanghuei(waneblade@gmail.com)
Color Updates: Dwayne Bradley (dwayne.bradley@gmail.com)

## License

MIT
