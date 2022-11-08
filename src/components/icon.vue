<template>
  <svg
    viewBox="0 0 24 24"
    :fill="color"
    class="v-icon"
    :class="{ 'v-icon--disabled': disabled }"
    :style="styleIcon"
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
      newSize() { 
        return this.xSmall
        ? '12'
        : this.small
        ? '16'
        : this.dense
        ? '20'
        : this.large
        ? '36'
        : this.xLarge
        ? '40'
        : this.size
      },
      styleIcon() {
        const style =  {
          width: this.newSize + 'px' ?? '24px',
          height: this.newSize + 'px' ?? '24px', 
          transform: this.rotate ? `rotate(${this.rotate}deg)` : null,
        }

        return style;
      },
      icon() {
        if (this.path) {
          return this.path;
        }

        return this.toCamelCase(this.path);
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
