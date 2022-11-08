<template>
  <div>
    <v-icon :path="mdiCheck" dense color="yellowgreen"></v-icon>
    <v-icon :path="mdiClose" large color="red" disabled></v-icon>
  </div>
</template>

<script>
import { mdiCheck, mdiClose } from "./list";

export default {
  setup() {
    return {
      mdiCheck,
      mdiClose,
    };
  },
};
</script>
