module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "lib.min.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
