const terserPlugin = require('terser-webpack-plugin');

module.exports = {
  productionSourceMap: false, //去除map文件
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
    open: true,
    host: '0.0.0.0',
    port: 8080
  }
};
