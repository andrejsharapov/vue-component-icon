# Vue Svg Icons

Create and use your own icons, or use only your favorites in your vue.js project.

[![GitHub watchers](https://img.shields.io/github/watchers/andrejsharapov/vue-svg-icons?style=social)][watchers]
[![GitHub forks](https://img.shields.io/github/forks/andrejsharapov/vue-svg-icons?style=social&)][forks]
[![GitHub stars](https://img.shields.io/github/stars/andrejsharapov/vue-svg-icons?style=social)][stars]

## Install

```bash
npm i --save-dev vue-svg-icons
# or
yarn add --dev vue-svg-icons
```

## How to use?

### Import and connection

Vue.js v2

```js
// main
import Vue from "vue";
import App from "./App.vue";
import vIcon from "vue-svg-icons";

new Vue({
  vIcon,
  render: (h) => h(App),
}).$mount("#app");
```

Vue.js v3

```js
// main
import { createApp } from "vue";
import App from "./App.vue";
import vIcon from "vue-svg-icons";

const app = createApp(App);

app.use(vIcon);
app.mount("#app");
```

#### Create a list of icons in your directory

```js
// path/list-icons

export const iCheck = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
export const iClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
...
export const yourIcon = "path";
...
```

#### Import the list locally in components or globally

```html
<!-- component.vue -->

<script>
  import { iCheck, iClose, yourIcon } from "./list-icons";

  export default {
    data: () => ({
      iCheck,
      iClose,
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
    <v-icon x-large color="yellowgreen" :path="iCheck" />
    <v-icon size="32" color="red" :path="iClose" />
  </div>
</template>
```

## Options

| Option   | Type                 |    Default     |
| -------- | -------------------- | :------------: |
| path     | `String`             |      `''`      |
| title    | `String`             |      `''`      |
| color    | `String`             | `currentColor` |
| x-small  | `Boolean`            |      ---       |
| small    | `Boolean`            |      ---       |
| dense    | `Boolean`            |      ---       |
| size     | `Boolean`            |      `24`      |
| large    | `Boolean`            |      ---       |
| x-large  | `Boolean`            |      ---       |
| disabled | `Boolean`            |      ---       |
| rotate   | `String` or `Number` |      ---       |

[watchers]: https://github.com/andrejsharapov/vue-svg-icons/watchers/
[forks]: https://github.com/andrejsharapov/vue-svg-icons/network/
[stars]: https://github.com/andrejsharapov/vue-svg-icons/stargazers/
