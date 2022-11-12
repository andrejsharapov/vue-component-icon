<script lang="ts">
import { convertToUnit, keys, camelCase } from '@/util/helpers';

enum SIZE_MAP {
  xSmall = '12px',
  small = '16px',
  default = '24px',
  medium = '28px',
  large = '36px',
  xLarge = '40px',
}

export default {
  name: 'c-icon',
  props: {
    color: {
      type: String,
      default: 'currentColor',
    },
    dark: {
      type: Boolean,
      default: false,
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
      default: '',
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
      default: '',
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
    getSize(): string | undefined {
      const sizes = {
        xSmall: this.xSmall,
        small: this.small,
        dense: this.dense,
        large: this.large,
        xLarge: this.xLarge,
      };

      const explicitSize = keys(sizes).find((key) => sizes[key]);

      return (
        (explicitSize && SIZE_MAP[explicitSize]) || convertToUnit(this.size)
      );
    },
    getStyle(): any | undefined {
      const style = {
        width: this.getSize ?? '24px',
        height: this.getSize ?? '24px',
        transform: this.rotate ? `rotate(${this.rotate}deg)` : null,
      };

      return style;
    },
    getClass(): any | undefined {
      const classIcon = {
        'c-icon--disabled': this.disabled,
        'c-icon--dark': this.dark && this.color === 'currentColor',
      };
      return classIcon;
    },
    icon(): string | undefined {
      if (this.path) {
        return this.path;
      }

      return camelCase(this.path);
    },
  },
};
</script>

<template>
  <svg
    class="c-icon"
    viewBox="0 0 24 24"
    :fill="color"
    :class="getClass"
    :style="getStyle"
  >
    <title v-if="title">{{ title }}</title>
    <path :d="icon"></path>
  </svg>
</template>

<style>
.c-icon {
  --ci-light: 0deg 0% 100%;
  --ci-dark: 0deg 0% 0%;
  --ci-opacity: 1;
  --ci-gutters: 0.5rem;
  --ci-color: hsl(var(--ci-dark) / var(--ci-opacity));

  fill: var(--ci-color);
  opacity: var(--ci-opacity);
}

.c-icon--disabled {
  --ci-opacity: 0.38;

  pointer-events: none;
  fill: currentColor;
}

@media (prefers-color-scheme: dark) {
  .c-icon--dark {
    --ci-color: hsl(var(--ci-light) / var(--ci-opacity));
  }
}
</style>
