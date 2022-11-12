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
    left: {
      type: Boolean,
      default: false,
    },
    right: {
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
      return {
        width: this.getSize ?? '24px',
        height: this.getSize ?? '24px',
        transform: this.rotate ? `rotate(${this.rotate}deg)` : null,
      };
    },
    iconData(): any | undefined {
      return {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        role: 'img',
        'aria-hidden': true,
        style: this.getStyle,
        class: {
          'c-icon': this.path,
          'c-icon--disabled': this.disabled,
          'c-icon--color': this.color,
          'c-icon--dark': this.dark && this.color === 'currentColor',
          'c-icon--left': this.left,
          'c-icon--right': this.right,
        },
      }
    },
    iconPath(): string | undefined {
      if (this.path) {
        return this.path;
      }

      return camelCase(this.path);
    },
  },
}
</script>

<template lang="pug">
svg(v-bind="iconData" :fill="color")
  title(v-if="title")
    | {{ title }}
  path(:d="iconPath")
</template>

<style>
.c-icon {
  --ci-base: 0deg 0% 0%;
  --ci-opacity: 1;
  --ci-gutters: 0.5rem;

  opacity: var(--ci-opacity);
}

.c-icon--disabled {
  --ci-opacity: 0.38;

  pointer-events: none;
}

.c-icon--dark {
  --ci-base: 0deg 0% 100%;
}

@media (prefers-color-scheme: dark) {
  .c-icon:not(.c-icon--color) {
    --ci-base: 0deg 0% 100%;
  }
}

.c-icon--left {
  margin-right: var(--ci-gutters, '0.5rem');
}

.c-icon--right {
  margin-left: var(--ci-gutters, '0.5rem');
}
</style>
