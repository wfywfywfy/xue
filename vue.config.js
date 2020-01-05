const path = require('path')


function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 选项...
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "assets",
  indexPath: "index.html",
  filenameHashing: true,
  pages: undefined,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  devServer: { //代理
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://118.190.161.148:81',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    // name: name,
    resolve: {
      alias: {
        '@@@': resolve('src')
      }
    }
  }

}