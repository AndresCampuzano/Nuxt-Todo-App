import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import ItemComponent from '@/components/Item.vue'
import { DATA } from '~/test/_data'

describe('ItemComponent', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(ItemComponent, {
      propsData: {
        localVue,
        vuetify,
        item: DATA[0],
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
