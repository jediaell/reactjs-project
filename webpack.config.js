const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const dotenv = require('dotenv');
const ManifestFile = require('./public/manifest');

module.exports = () => {
  // Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);

  // Create the fallback path (the production .env)
  const basePath = `${currentPath}/.env.dev`;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: basePath }).parsed;

  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    // eslint-disable-next-line no-param-reassign
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      'whatwg-fetch',
      './src/index.tsx',
    ],
    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'public/dist'),
      port: process.env.PORT || 3000,
      host: '0.0.0.0',
      publicPath: '/',
      historyApiFallback: true,
      disableHostCheck: true,
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '~': path.resolve(__dirname, 'src/'),
      },
    },
    output: {
      path: path.join(__dirname, 'public/dist'),
      publicPath: '/',
      filename: 'app.[hash].js',
    },
    devtool: 'eval',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
        },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'es2015',
                {
                  modules: false,
                },
              ],
              'stage-0',
              'react',
            ],
            plugins: [
              'transform-async-to-generator',
              'transform-decorators-legacy',
            ],
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            {
              loader: 'image-webpack-loader',
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: 4,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
              },
            },
          ],
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'file-loader',
          exclude: /images/,
        },
      ],
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({ hash: false, template: './public/index.html' }),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /nb/),
      new ManifestPlugin(ManifestFile),
      new webpack.DefinePlugin(envKeys),
      new FaviconsWebpackPlugin('./public/favicon.png'),
    ],
  };
};
