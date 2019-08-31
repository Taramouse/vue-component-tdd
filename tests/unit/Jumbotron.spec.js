import { shallowMount } from '@vue/test-utils'
import Jumbotron from '@/components/Jumbotron.vue'

const factory = (values = {}) => {
  return shallowMount(Jumbotron, {
    propsData: {
      title: 'This is the title',
      content: 'This is the content.'
    }
  })
}

describe('Jumbotron', () => {
  it('renders a title', () => {
    const wrapper = factory()

    expect(wrapper.find('.title').text()).toEqual('This is the title')
  })

  it('renders the content', () => {
    const wrapper = factory()

    expect(wrapper.find('.content').text()).toEqual('This is the content.')
  })
})
