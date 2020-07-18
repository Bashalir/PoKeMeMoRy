const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
});
