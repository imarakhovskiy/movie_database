const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { HotModuleReplacementPlugin } = require("webpack")

module.exports = {
    devServer: {
        hot: true,
        port: 8080,
    },
    target: "web",
    entry: {
      app: ["./src/index.ts"],
      vendor: ["react", "react-dom"]
    },
    output: {
        publicPath: "",
      },
    devtool: "source-map",
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      alias: {
        stream: "stream-browserify",
        buffer: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: ["@svgr/webpack", "url-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          enforce: "pre",
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            env: {
              browser: true,
              node: true,
            },
          },
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
          }),
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
    ],
}