const terserPlugin = require('terser-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    config.optimization = {
      minimizer: [
        new terserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true, //去除console
              drop_debugger: true, //去除debugger
              pure_funcs: ['console.log']
            }
          }
        })
      ]
    };
  },
  devServer: {
    open: true
  }
};
