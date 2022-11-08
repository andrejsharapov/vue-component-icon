<template>
  <svg
    viewBox="0 0 24 24"
    :width="
      xSmall
        ? '12'
        : small
        ? '16'
        : dense
        ? '20'
        : large
        ? '36'
        : xLarge
        ? '40'
        : size
    "
    :height="
      xSmall
        ? '12'
        : small
        ? '16'
        : dense
        ? '20'
        : large
        ? '36'
        : xLarge
        ? '40'
        : size
    "
    :fill="color"
    class="v-icon"
    :class="{ 'v-icon--disabled': disabled }"
    :style="transform"
  >
    <title v-if="title">{{ title }}</title>
    <path :d="icon"></path>
  </svg>
</template>

<script>
  export default {
    name: "v-icon",
    props: {
      color: {
        type: String,
        default: "currentColor",
      },
      dense: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      large: {
        type: Boolean,
        default: false,
      },
      path: {
        type: String,
        default: "",
        required: true,
      },
      rotate: {
        type: [String, Number],
        default: 0,
      },
      size: {
        type: [String, Number],
        default: 24,
      },
      small: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: "",
      },
      xLarge: {
        type: Boolean,
        default: false,
      },
      xSmall: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      icon() {
        if (this.path) {
          return this.path;
        }

        return this.toCamelCase(this.path);
      },
      transform() {
        return this.rotate ? `transform: rotate(${this.rotate}deg)` : null;
      },
    },
    methods: {
      toCamelCase(str) {
        const result = str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
          return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        });

        return result.replace(/\s+|[-]/g, "");
      },
    },
  };
</script>

<style>
  .v-icon--disabled {
    pointer-events: none;
    opacity: 0.38;
    fill: currentColor;
  }
</style>
