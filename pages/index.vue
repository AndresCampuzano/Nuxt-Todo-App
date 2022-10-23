<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div v-if="$fetchState.pending">
        <ItemLoadingSkeleton />
      </div>
      <div v-else-if="$fetchState.error">An error occurred</div>
      <v-list v-else>
        <draggable v-model="items">
          <Item
            v-for="item in items"
            :key="item.id"
            :item="item"
            :checkbox.sync="item.completed"
          />
        </draggable>
      </v-list>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import draggable from 'vuedraggable'
import type { ItemType } from '~/types/ItemType'
import { ELEMENTS_TO_RETURN } from '~/constants/constants'
import { getItems } from '~/api/getItems'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    draggable,
  },
  data() {
    return {
      items: [] as ItemType[],
    }
  },
  async fetch() {
    const items = await getItems()
    this.items = this.getFirstTenElements(items)
  },
  methods: {
    /**
     * Returns 10 first elements from given array
     * @param {ItemType[]} array - List
     * @returns {ItemType[]}
     */
    getFirstTenElements(array: ItemType[]): ItemType[] {
      return array.slice(0, ELEMENTS_TO_RETURN)
    },
  },
})
</script>
