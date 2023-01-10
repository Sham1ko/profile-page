<script lang="ts">
import CustomHeader from "./components/CustomHeader.vue";
export default {
  components: {
    CustomHeader,
  },
};
</script>

<template>
  <custom-header />
  <RouterView />
</template>

<style scoped></style>
