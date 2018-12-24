const path = require('path')

const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve('src'))
      .set("_c", resolve('src/components'))
  },
  //打包时不生成.map文件
  productionSourceMap: false,
  //跨域请求代理服务
  // 它支持webPack-dev-server的所有选项
  devServer: {
    // host: "localhost",
    //   port: 8080, // 端口号
    // https: false, // https:{type:Boolean}
    // open: false, //配置自动启动浏览器
    proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // 配置多个代理
    //   proxy: {
    //     "/api": {
    //       target: "<url>",
    //       ws: true,
    //       changeOrigin: true
    //     },
    //     "/foo": {
    //       target: "<other_url>"
    //     }
    //   }
  }
}
