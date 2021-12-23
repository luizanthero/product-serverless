const path = require('path')
// eslint-disable-next-line node/no-unpublished-require
const slsw = require('serverless-webpack')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  stats: 'minimal',
  devtool: 'nosources-source-map',
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  externals: {
    // aws-sdk já é disponibilizada no ambiente lambda
    'aws-sdk': 'aws-sdk'
  }
}
