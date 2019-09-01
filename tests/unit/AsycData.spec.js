import { shallowMount } from '@vue/test-utils'
import AsyncData from '@/components/AsyncData.vue'

const factory = (values = {}) => {
  return shallowMount(AsyncData, {
    data () {
      return {
        title: 'This is the title'
      }
    }
  })
}

describe('AsyncData', () => {
  it('renders a title', () => {
    const wrapper = factory()

    expect(wrapper.find('.title').text()).toEqual('This is the title')
  })
})
