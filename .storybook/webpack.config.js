const baseConfig = require('../webpack.config');

module.exports = ({ config }) => ({
    ...config,
    module: {
      ...config.module,
      rules: baseConfig.module.rules
    },
    resolve: {
        ...config.resolve.modules,
        modules: baseConfig.resolve.modules
    }
});