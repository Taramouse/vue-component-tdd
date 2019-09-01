import axios from 'axios'

let info = null

axios.get('__mocks__/coinData.json').then(response => (this.info = response.data.bpi))

export default { info }
