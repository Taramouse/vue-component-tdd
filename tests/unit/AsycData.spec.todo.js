import { shallowMount } from '@vue/test-utils'
import AsyncData from '@/components/AsyncData'

const factory = (values = {}) => {
  return shallowMount(AsyncData, {
    data () {
      return {
        title: 'This is the title',
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        info: null,
        errorMessage: null,
        errored: false,
        loading: false
      }
    }
  })
}

describe('AsyncData', () => {
  it('renders a title', () => {
    const wrapper = factory()

    expect(wrapper.find('.title').text().toEqual('This is the title'))
  })
})
