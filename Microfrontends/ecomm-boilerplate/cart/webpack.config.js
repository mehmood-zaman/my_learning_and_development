const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFedrationPlugIn = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ModuleFedrationPlugIn({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/index",
      },
      shared: ["faker"],
    }),
  ],
};
