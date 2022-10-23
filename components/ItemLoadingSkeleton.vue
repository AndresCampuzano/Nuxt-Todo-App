<template>
  <v-skeleton-loader
    class="mx-auto"
    max-width="300"
    type="list-item-two-line"
  ></v-skeleton-loader>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ItemLoadingSkeleton',
})
</script>

<style scoped></style>
