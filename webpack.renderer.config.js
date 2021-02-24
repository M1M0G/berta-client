const rules = require('./webpack.rules');
const Dotenv = require('dotenv-webpack');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  plugins: [
    new Dotenv
  ],
  module: {
    rules,
  },
};
