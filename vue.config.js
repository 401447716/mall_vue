module.exports = {
  configureWebpack: {
    resolve: {
      extensions: {},
      alias: {
        'assets': '@/assets',
        'common': '@/commonJS',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
};
