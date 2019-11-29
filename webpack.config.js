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
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/web'),
    publicPath: '/',
    filename: '[name].[hash].js',
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      ui: path.resolve(__dirname, 'src/components/ui/*'),
    },
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
              name: './fonts/[name].[contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(pdf|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[contenthash].[ext]',
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development', // hmr -> hot module replacement
              ignoreOrder: false, // Enable to remove warnings about conflicting order
            },
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!other', '!other/**/*'], // Removes files once prior to Webpack compilation  //   Not included in rebuilds (watch mode)
      // cleanAfterEveryBuildPatterns: ['!other/*'], // cleanOnceBeforeBuildPatterns: [], // disables cleanOnceBeforeBuildPatterns
    }),
    new HtmlWebpackPlugin({
      template: './public/index_template.html',
    }),
    new MiniCssExtractPlugin({
      filename: './[name].[contenthash].css',
      chunkFilename: './[name].[id].[contenthash].css',
      ignoreOrder: false,
    }),
  ],
};
