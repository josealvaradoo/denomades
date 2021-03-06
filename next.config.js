const Dotenv = require("dotenv-webpack")
const withImage = require('next-images')

module.exports = withImage({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new Dotenv({ silent: true }))
    return config
  },
  env: {
    API_URI: process.env.API_URI,
		APP_TITLE: process.env.APP_TITLE
  },
})
