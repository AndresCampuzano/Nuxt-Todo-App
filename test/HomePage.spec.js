import { shallowMount } from '@vue/test-utils'
import HomePage from '@/pages/index.vue'
import { DATA } from '~/test/_data'

describe('HomePage', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(HomePage, {
      mocks: {
        $fetchState: { pending: false, error: false, items: DATA },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
