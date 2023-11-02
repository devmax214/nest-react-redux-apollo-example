var webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/frontend/client.tsx',
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        test: /\.ts?$/,
        ts: {
          compiler: 'typescript',
          configFile: 'tsconfig.json'
        },
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.ts?(x)$/, exclude: /node_modules/, loader: "ts-loader" },
      { test: /\.css$/, exclude: /node_modules/, loader: "css-loader" },
    ]
  },
}
