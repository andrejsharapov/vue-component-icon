<script>
const SIZE_MAP = [
  { name: 'xSmall', val: '12' },
  { name: 'small', val: '16' },
  { name: 'dense', val: '20' },
  { name: 'large', val: '36' },
  { name: 'xLarge', val: '40' },
];

export default {
  name: 'c-icon',
  props: {
    color: {
      type: String,
      default: undefined,
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
    left: {
      type: Boolean,
      default: false,
    },
    path: {
      type: String,
      default: '',
      required: true,
    },
    right: {
      type: Boolean,
      default: false,
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
    applyColors() {
      if (this.color === undefined) {
        return 'currentColor';
      } else {
        return this.color;
      }
    },
    iconData() {
      return {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        role: 'img',
        'aria-hidden': true,
        fill: this.applyColors,
        'data-title': this.title,
        style: this.getStyle(),
        class: {
          'c-icon': this.path,
          'c-icon--disabled': this.disabled,
          'c-icon--color': this.color,
          'c-icon--dark': this.dark && !this.color,
          'c-icon--left': this.left,
          'c-icon--right': this.right,
        },
      };
    },
    iconPath() {
      if (this.path) {
        return this.path;
      }

      return this.toCamelCase(this.path);
    },
  },
  methods: {
    getStyle() {
      const sizes = [
        { name: 'xSmall', val: this.xSmall },
        { name: 'small', val: this.small },
        { name: 'dense', val: this.dense },
        { name: 'large', val: this.large },
        { name: 'xLarge', val: this.xLarge },
      ];
      const rotate = this.rotate;
      const getSize = sizes.find((el) => el.val == true);

      function styleIcon(size) {
        return {
          width: size + 'px',
          height: size + 'px',
          transform: rotate ? `rotate(${rotate}deg)` : null,
        };
      }

      if (getSize && getSize !== undefined && parseInt(this.size) === 24) {
        const explicitSize = SIZE_MAP.find((el) => el?.name === getSize?.name);

        return styleIcon(explicitSize.val);
      }

      return styleIcon(this.size);
    },
    toCamelCase(str) {
      const result = str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
      });

      return result.replace(/\s+|[-]/g, '');
    },
  },
};
</script>

<template>
  <svg v-bind="iconData">
    <title v-if="title">{{ title }}</title>
    <path :d="iconPath"></path>
  </svg>
</template>

<style>
.c-icon {
  --ci-color-base: 0deg 0% 0%;
  --ci-gutters: 0.5rem;
  --ci-opacity: 1;

  opacity: var(--ci-opacity);
}

.c-icon:not(.c-icon--color) {
  fill: hsl(var(--ci-color-base) / var(--ci-opacity));
}

.c-icon--disabled {
  pointer-events: none;
  fill: currentColor;

  --ci-opacity: 0.38;
}

.c-icon--dark {
  --ci-color-base: 0deg 0% 100%;
}

@media (prefers-color-scheme: dark) {
  .c-icon:not(.c-icon--color) {
    --ci-color-base: 0deg 0% 100%;
  }
}

.c-icon--left {
  margin-right: var(--ci-gutters, '0.5rem');
}

.c-icon--right {
  margin-left: var(--ci-gutters, '0.5rem');
}
</style>
