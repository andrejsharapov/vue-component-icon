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
    class="mdi-icon"
    :style="transform"
    :class="{ 'v-icon--disabled': disabled }"
  >
    <title v-if="title">{{ title }}</title>
    <path :d="icon"></path>
  </svg>
</template>

<script>
export default {
  name: "v-icon",
  props: {
    path: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "currentColor",
    },
    xSmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    size: {
      type: [String, Number],
      default: 24,
    },
    large: {
      type: Boolean,
      default: false,
    },
    xLarge: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rotate: {
      type: [String, Number],
      default: 0,
    },
  },
  lib: {},
  add(icons) {
    if (typeof icons === "object" && icons !== null) {
      this.lib = icons;
    }
  },
  computed: {
    icon() {
      if (this.path) {
        return this.path;
      }

      return this.toCamelCase(this.path);

      // const icon = this.$options.lib[this.toCamelCase(this.name)];

      // if (typeof icon === "undefined") {
      //   console.error(`[${this.name}] Name of the icon is incorrect`);
      //   return;
      // }
      // return icon;
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
