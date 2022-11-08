# Vue Svg Icons

Create and use your own icons, or use only your favorites in your vue.js project.

## Install

```bash
npm i --save-dev vue-svg-icons
# or
yarn add --dev vue-svg-icons
```

## How to use?

### Import and connection

#### Create a list of icons in your directory

```js
export const iCheck = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
export const iClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
export const iconName = "svg path";
...
...
```

#### Import the file locally in required components or globally

```js
# component.vue

<script>
  import { iCheck, iClose } from "./list";
  
  export default {
    data: () => ({
      iCheck,
      iClose
    }),
  };
</script>
```

### Usage

```js
<template>
  <div>
    <pre>{{ iCheck }}</pre>
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
