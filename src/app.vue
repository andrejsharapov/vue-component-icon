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

<template lang="pug">
#app
  c-icon(:path="mdiCheck" large dark color="green")
  c-icon(:path="mdiMagnify" small size="64" dark)
  c-icon(:path="mdiClose" rotate="45" color="blue")
  c-icon(:path="mdiLock" xLarge disabled)
</template>
