const ModuleFederationPlugion = require('webpack/lib/container/ModuleFederationPlugin');
const dependencies = require('./package.json').dependencies;

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/, // ask babel to compile .js files
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { // compile react & any advanced ES into ES5
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugion({
      name: 'dj_poc_mf_lib',
      filename: 'remoteEntry.js',
      exposes: {
        './some-widget': './src/components/some-widget',
      },
      shared: {
        react: {
          import: 'react',
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          import: 'react-dom',
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        }
      }
    })
  ]
};
