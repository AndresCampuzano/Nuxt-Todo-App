<template>
  <v-list-item
    class="my-3 grey lighten-5 rounded-sm elevation-1"
    :class="{
      'grey lighten-5': !isTaskCompleted,
      'grey lighten-2': isTaskCompleted,
    }"
  >
    <v-list-item-action>
      <v-checkbox :input-value="isTaskCompleted" @click="handleCheckboxClick">
        <template #label>
          <span class="checkbox__label">checkbox</span>
        </template>
      </v-checkbox>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title
        tag="p"
        class="ma-0 text-wrap text--lighten-1"
        :class="{
          'text-decoration-line-through text--disabled': isTaskCompleted,
        }"
      >
        {{ item.title }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { ItemType } from '~/types/ItemType'

export default Vue.extend({
  name: 'ItemComponent',
  props: {
    item: {
      type: Object as PropType<ItemType>,
      required: true,
    },
  },
  computed: {
    /**
     * Checks if the task is completed
     * @returns {boolean}
     */
    isTaskCompleted(): boolean {
      return this.item.completed
    },
  },
  methods: {
    /**
     * Two-way binding for editing 'item.completed'
     */
    handleCheckboxClick(): void {
      this.$emit('update:checkbox', !this.isTaskCompleted)
    },
  },
})
</script>

<style lang="scss">
// Accessibility purposes
.checkbox__label {
  display: none;
}
</style>
