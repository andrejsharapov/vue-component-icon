<script lang="ts">
import Vue from 'vue';
import { mdiCheck, mdiClose } from './list';
import { mdiMagnify, mdiLock } from '@mdi/js';

export default Vue.extend({
  data: () => ({
    mdiCheck,
    mdiClose,
    mdiMagnify,
    mdiLock,
  }),
});
</script>

<template lang="pug">
#app
  c-icon(:path="mdiCheck" large dark color="green")
  c-icon(:path="mdiMagnify" dense dark)
  c-icon(:path="mdiClose" rotate="45" color="blue")
  c-icon(:path="mdiLock" disabled)
</template>
