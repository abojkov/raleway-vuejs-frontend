const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      "0.0.0.0",
      "railway.app",
      "raleway-vuejs-frontend-production.up.railway.app/"
    ]
  }
})
