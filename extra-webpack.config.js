const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.devServer.static = {
    directory: singleSpaWebpackConfig.devServer.contentBase
  }

  delete singleSpaWebpackConfig.devServer.contentBase;
  console.log(singleSpaWebpackConfig)
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
