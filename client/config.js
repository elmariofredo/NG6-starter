console.log(__dirname + "/client");

module.exports = {
  context: __dirname + "/client",
  entry: 'app.ts'
  devtool: 'sourcemap',
  output: {
    path: path.resolve(__dirname, "client"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ts' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
