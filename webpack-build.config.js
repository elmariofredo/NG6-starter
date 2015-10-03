
module.exports = {
  devtool: 'sourcemap',
  context: __dirname + "/client",
  entry: "./app/app.ts",
  output: {
    path: __dirname + "/client",
    filename: '/bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension. 
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  watch: true,
  module: {
    loaders: [
       { test: /\.ts$/, exclude: [/app\/lib/, /node_modules/], loader: 'ts' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
