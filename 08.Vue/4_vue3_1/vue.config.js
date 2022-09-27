const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,  // 解决跨域
  lintOnSave:false,  // 关闭语法检查
})
