const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugion = require('webpack/lib/container/ModuleFederationPlugin');
const dependencies = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
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
      name: 'dj_poc_mf_host',
      filename: 'remoteEntry.js',
      remotes: {
        poc_lib: 'dj_poc_mf_lib@http://localhost:8083/remoteEntry.js',
        // poc_lib: 'dj_poc_mf_lib@http://<some S3 bucket url>/remoteEntry.js',
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
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
};
