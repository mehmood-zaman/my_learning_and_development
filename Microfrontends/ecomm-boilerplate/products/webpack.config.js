const htmlWebpackServe = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new htmlWebpackServe({
      template: "public/index.html",
    }),
  ],
};
