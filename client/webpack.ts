import HtmlWebPackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

const { NODE_ENV, SERVER_PORT, SERVER_HOST } = process.env;

// const SERVER_URL = `${SERVER_HOST}:${SERVER_PORT}/graphql`;
// export default SERVER_URL;

module.exports = {
  mode: NODE_ENV === 'development' ? 'development' : 'production',
  entry: './src/index.tsx',
  performance: {
    hints: false,
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jxs', '.ts', '.tsx', '.json'],
  },
  devServer: {
    port: 5000,
    open: true,
    hot: true,
    historyApiFallback: true,
    proxy: { '/graphql': `${SERVER_HOST}:${SERVER_PORT}` },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/public/index.html',
    }),
  ],
};
