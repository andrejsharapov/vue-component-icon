# Vue Component Icon

Create and use your own icons, or use only your favorites in your vue.js project.

[![NPM Version](https://img.shields.io/npm/v/vue-component-icon)][npm]
[![GitHub watchers](https://img.shields.io/github/watchers/andrejsharapov/vue-component-icon)][watchers]
[![GitHub forks](https://img.shields.io/github/forks/andrejsharapov/vue-component-icon)][forks]
[![GitHub stars](https://img.shields.io/github/stars/andrejsharapov/vue-component-icon)][stars]

## Install

```bash
npm i --save-dev vue-component-icon
# or
yarn add --dev vue-component-icon
```

## How to use?

### Import and connection

Vue.js v2

```js
// main
import Vue from "vue";
import App from "./App.vue";
import cIcon from "vue-component-icon";

new Vue({
  cIcon,
  render: (h) => h(App),
}).$mount("#app");
```

Vue.js v3

```js
// main
import { createApp } from "vue";
import App from "./App.vue";
import cIcon from "vue-component-icon";

const app = createApp(App);

app.use(cIcon);
app.mount("#app");
```

#### Create a list of icons in your directory

```js
// path/list-icons

export const mdiCheck = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
export const mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
...
export const yourIcon = "path";
...
```

<details>
<summary>How to add icons from mdi, fontawesome and more?</summary>

### for mdi

1. go to [mdi website](https://materialdesignicons.com/);
2. select and click to the icon;
3. find the `Advanced Export` label and click on the `code` icon;
4. elect `View SVG`;
5. select and copy path from the `d="..."`;
6. create a variable in the icon file;

### for Font Awesome

1. go to [fontawesome](https://fontawesome.com/);
2. select and click to the icon;
3. find and click the `code` icon to copy the SVG;
4. paste the code in any text editor and cut the content from `d="..."`;
5. create a variable in the icon file;

</details>

#### Import the list locally in components or globally

```html
<!-- component.vue -->

<script>
  import { mdiCheck, mdiClose, yourIcon } from "./list-icons";

  export default {
    data: () => ({
      mdiCheck,
      mdiClose,
      yourIcon,
    }),
  };
</script>
```

#### Usage in template

```html
<template>
  <div>
    <pre>{{ yourIcon }}</pre>
    <v-icon x-large color="yellowgreen" :path="mdiCheck" />
    <v-icon size="32" color="red" :path="mdiClose" />
  </div>
</template>
```

<details>
<summary>Use with @mdi/js and Nuxt</summary>

1. Create plugin `vue-component-icon.js`

```js
// ./plugins/vue-component-icon.js

import Vue from 'vue'
import cIcon from 'vue-component-icon'

Vue.use(cIcon)
```

2. Add plugin in `nuxt.config`

```js
plugins: [
  ...
  { src: '~/plugins/vue-component-icon' },
  ...
],
```

3. Use in vue component

```html
<script>
import { mdiBriefcaseEyeOutline } from '@mdi/js'

export default {
  data() {
    return {
      mdiBriefcaseEyeOutline,
    }
  }
}
</script>

<template>
  <v-icon :path="mdiBriefcaseEyeOutline" />
</template>
```

</details>

## Props

| Name     | Type                 | Require    | Default        | Description                                                                                                  |
| -------- | -------------------- | :--------- | :------------- | ------------------------------------------------------------------------------------------------------------ |
| color    | `string`             | optional   | `currentColor` | Applies specified color to the control. For example `yellow` or css color (`#fff` or `rgba(255, 0, 0, 0.5)`) |
| dense    | `boolean`            | optional   | false          | Makes icon smaller (20px)                                                                                    |
| disabled | `boolean`            | optional   | false          | Disable the input                                                                                            |
| large    | `boolean`            | optional   | false          | Makes the component large (36px)                                                                             |
| path     | `string`             | `required` | `''`           | Generic element to define a shape                                                                            |
| rotate   | `number` or `string` | optional   | `0`            | from `0` to `360`                                                                                            |
| size     | `number` or `string` | optional   | `24`           | Specifies a custom font size for the icon                                                                    |
| small    | `boolean`            | optional   | false          | Makes the component small (16px)                                                                             |
| title    | `string`             | optional   | `''`           | Adds a header to the svg                                                                                     |
| x-large  | `boolean`            | optional   | false          | Makes the component extra large (40px)                                                                       |
| x-small  | `boolean`            | optional   | false          | Makes the component extra small (12px)                                                                       |

## License

Vue Component Icon is licensed under the MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.

[npm]: https://www.npmjs.com/package/vue-component-icon/
[watchers]: https://github.com/andrejsharapov/vue-component-icon/watchers/
[forks]: https://github.com/andrejsharapov/vue-component-icon/network/
[stars]: https://github.com/andrejsharapov/vue-component-icon/stargazers/
