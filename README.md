# @ox2/toggle
![NPM version](https://img.shields.io/badge/npm-private-orange.svg?style=flat)
<!-- ![NPM version](https://img.shields.io/npm/v/@ox2/toggle.svg?style=flat) -->

React `Toggle` component visually similar to native iOS toggle.

## Features

* **Mobile Optimized** Excellent mobile animation performance.
* **Checkbox** Its a styled browser `form element` checkbox.

## Installation
Install using [npm](http://npmjs.com):
```sh
npm install @ox2/toggle --save
```
Install using [yarn](http://yarnpkg.com):
```sh
yarn add @ox2/toggle
```

## Usage
```js
import Toggle from '@ox2/toggle/Toggle';

const handleChange = (value) => console.log('🍇', value);

<Toggle
  value={true}
  label={'Show profile settings'}
  onChange={handleChange}
/>

```

## Change Log
Changes are tracked in the [CHANGELOG.md](https://github.com/ox2/toggle/tree/master/CHANGELOG.md)

## License
[MIT](https://github.com/ox2/toggle/tree/master/LICENSE)
