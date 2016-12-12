You can use this package with [redux-form](https://github.com/erikras/redux-form) and wrap it yourself or use a pramade wrapper package `@ox2/redux-form-toggle`:

Install:
```sh
yarn add @ox2/redux-form-toggle
```

Use:
```js
import ToggleField from '@ox2/redux-form-toggle/ToggleField';

<Field
  name={'mySetting'}
  component={ToggleField}
  label={'My label'}
/>

```
