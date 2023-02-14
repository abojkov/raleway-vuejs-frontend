const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      "railway.app",
      "raleway-vuejs-frontend-production.up.railway.app/"
    ]
  }
})
