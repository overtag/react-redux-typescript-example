const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin'); // Оптимизирует js файлы
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // Оптимизирует css файлы
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // webpack will take the files from ./src/index
  entry: { bundle: './src/index.tsx' },

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/web'),
    filename: '[name].[hash].js',
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  mode: 'development',

  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        exclude: /node_modules/,
        test: /\.(js)x?$/,
        use: ['babel-loader'],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        exclude: /node_modules/,
        test: /\.(ts)x?$/,
        use: [{ loader: 'ts-loader' }],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(pdf|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '/web',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
      dirty: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index_template.html',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
};
