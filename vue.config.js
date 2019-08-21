module.exports = {
  devServer: {
    proxy: "http://192.168.2.2:8123"
  },
  pluginOptions: {
    moment: {
      locales: ["zh-cn"]
    }
  }
};
