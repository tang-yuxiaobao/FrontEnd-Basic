const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器（方式1）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  // 开启代理服务器（方式2）
  devServer: {
    proxy: {
      // 请求前缀，前缀写在发送请求的端口号后面
      '/api1': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api1': ''},  // 匹配所有以 '/api1'开头的请求路径
        ws: true,  // 用于支持websocket
        changeOrigin: true  // 用于控制请求中的post值
      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/api2': ''},  // 匹配所有以 '/api1'开头的请求路径
        ws: true,  // 用于支持websocket
        changeOrigin: true  // 用于控制请求中的post值
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
