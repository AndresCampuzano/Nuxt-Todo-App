import { shallowMount } from '@vue/test-utils'
import ItemLoadingSkeleton from '@/components/ItemLoadingSkeleton.vue'

describe('ItemLoadingSkeleton', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ItemLoadingSkeleton)
    expect(wrapper.vm).toBeTruthy()
  })
})
