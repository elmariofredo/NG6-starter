module.exports = function (config) {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files/patterns to load in the browser
    files: ['client/app/app.test.js'],


    // files: [{ pattern: 'spec.bundle.js', watched: false }],

    // files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'client/app/app.test.js': ['webpack', 'sourcemap'] },

    // webpack: {
    //   devtool: 'inline-source-map',
    //   module: {
    //     loaders: [
    //       { test: /\.ts$/, exclude: [/app\/lib/, /node_modules/], loader: 'ts' },
    //       { test: /\.html$/, loader: 'raw' },
    //       { test: /\.css$/, loader: 'style!css' }
    //     ]
    //   }
    // },

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
      module: {
        loaders: [
          { test: /\.ts$/, exclude: [/app\/lib/, /node_modules/], loader: 'ts' },
          { test: /\.html$/, loader: 'raw' },
          { test: /\.css$/, loader: 'style!css' }
        ]
      }
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // if true, Karma runs tests once and exits
    singleRun: true
  });
};
