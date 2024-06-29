import process from 'node:process'

export default {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-demo/' : '/'
}
