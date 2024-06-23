const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "customer-management-app": "http://localhost:4201/remoteEntry.js",
    "payments-app": "http://localhost:4202/remoteEntry.js",
    "relation-history-app": "http://localhost:4203/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },

});
