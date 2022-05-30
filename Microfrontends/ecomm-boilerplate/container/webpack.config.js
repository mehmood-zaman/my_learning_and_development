const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFedrationPlugin({
      name: "container",
      remotes: { products: "products@http://localhost:8081/remoteEntry.js" },
    }),
    new htmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
