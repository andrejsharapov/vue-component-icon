<template>
  <div>
    <c-icon
      :path="mdiCheck"
      dense
      rotate="22"
      color="green"
    />
    <c-icon
      :path="mdiClose"
      large
      color="red"
    />
    <c-icon
      :path="mdiMagnify"
      rotate="32"
      color="blue"
    />
  </div>
</template>

<script>
import { mdiCheck, mdiClose } from './list';
import { mdiMagnify } from '@mdi/js';

export default {
  setup() {
    return {
      mdiCheck,
      mdiClose,
      mdiMagnify,
    };
  },
};
</script>
