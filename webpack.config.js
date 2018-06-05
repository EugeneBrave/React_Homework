const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'), 
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9487
  }
}