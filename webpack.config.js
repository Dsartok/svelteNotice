const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".mjs", ".js", ".svelte"],
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "./public"),
    publicPath: "/build",
    compress: true,
    port: 3020,
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true,
          },
        },
      },
    ],
  },
  mode: "development",
};
