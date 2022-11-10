<template>
  <div class="icons-wrapper">
    <c-icon
      :path="mdiCheck"
      large
      dark
      color="green"
    />
    <c-icon
      :path="mdiMagnify"
      dense
      dark
    />
    <c-icon
      :path="mdiClose"
      rotate="45"
      color="blue"
    />
    <c-icon
      :path="mdiLock"
      disabled
    />
  </div>
</template>

<script>
import { mdiCheck, mdiClose } from './list';
import { mdiMagnify, mdiLock } from '@mdi/js';

export default {
  setup() {
    return {
      mdiCheck,
      mdiClose,
      mdiMagnify,
      mdiLock,
    };
  },
};
</script>

<style>
.icons-wrapper {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  place-items: center;
  grid-gap: 5vw;
}
</style>
