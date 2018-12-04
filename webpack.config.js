const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    targets: {
                      browsers: ['last 3 versions', 'Explorer >= 10'],
                    },
                    modules: false,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'node_modules'),
        // excluding rrule from the source-map-loader will stop the warnings when running webpack
        // exclude: [path.resolve(__dirname, 'node_modules/rrule')],
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
}
