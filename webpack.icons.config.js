/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/clr-icons/index.ts',
    'interfaces/icon-interfaces': './src/clr-icons/interfaces/icon-interfaces.ts',
    'utils/descriptor-config': './src/clr-icons/utils/descriptor-config.ts',
    'clr-icons-api': './src/clr-icons/clr-icons-api.ts',
    'clr-icons-element': './src/clr-icons/clr-icons-element.ts',
    'clr-icons-base.min': './src/clr-icons/index.ts',
    'clr-icons-all-shapes.min': './src/clr-icons/clr-icons-all-shapes.ts',
    'shapes/all': './src/clr-icons/shapes/all.ts',
    'shapes/all.min': './src/clr-icons/shapes/all.ts',
    'shapes/commerce': './src/clr-icons/shapes/commerce.ts',
    'shapes/commerce.min': './src/clr-icons/shapes/commerce.ts',
    'shapes/commerce-umd': './src/clr-icons/shapes/commerce-umd.ts',
    'shapes/commerce-umd.min': './src/clr-icons/shapes/commerce-umd.ts',
    'shapes/core': './src/clr-icons/shapes/core.ts',
    'shapes/core.min': './src/clr-icons/shapes/core.ts',
    'shapes/core-umd': './src/clr-icons/shapes/core-umd.ts',
    'shapes/core-umd.min': './src/clr-icons/shapes/core-umd.ts',
    'shapes/essential': './src/clr-icons/shapes/essential.ts',
    'shapes/essential.min': './src/clr-icons/shapes/essential.ts',
    'shapes/essential-umd': './src/clr-icons/shapes/essential-umd.ts',
    'shapes/essential-umd.min': './src/clr-icons/shapes/essential-umd.ts',
    'shapes/media': './src/clr-icons/shapes/media.ts',
    'shapes/media.min': './src/clr-icons/shapes/media.ts',
    'shapes/media-umd': './src/clr-icons/shapes/media-umd.ts',
    'shapes/media-umd.min': './src/clr-icons/shapes/media-umd.ts',
    'shapes/social': './src/clr-icons/shapes/social.ts',
    'shapes/social.min': './src/clr-icons/shapes/social.ts',
    'shapes/social-umd': './src/clr-icons/shapes/social-umd.ts',
    'shapes/social-umd.min': './src/clr-icons/shapes/social-umd.ts',
    'shapes/travel': './src/clr-icons/shapes/travel.ts',
    'shapes/travel.min': './src/clr-icons/shapes/travel.ts',
    'shapes/travel-umd': './src/clr-icons/shapes/travel-umd.ts',
    'shapes/travel-umd.min': './src/clr-icons/shapes/travel-umd.ts',
    'shapes/technology': './src/clr-icons/shapes/technology.ts',
    'shapes/technology.min': './src/clr-icons/shapes/technology.ts',
    'shapes/technology-umd': './src/clr-icons/shapes/technology-umd.ts',
    'shapes/technology-umd.min': './src/clr-icons/shapes/technology-umd.ts',
    'shapes/chart': './src/clr-icons/shapes/chart.ts',
    'shapes/chart.min': './src/clr-icons/shapes/chart.ts',
    'shapes/chart-umd': './src/clr-icons/shapes/chart-umd.ts',
    'shapes/chart-umd.min': './src/clr-icons/shapes/chart-umd.ts',
    'shapes/text-edit': './src/clr-icons/shapes/text-edit.ts',
    'shapes/text-edit.min': './src/clr-icons/shapes/text-edit.ts',
    'shapes/text-edit-umd': './src/clr-icons/shapes/text-edit-umd.ts',
    'shapes/text-edit-umd.min': './src/clr-icons/shapes/text-edit-umd.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist/clr-icons'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  target: 'web',
  resolve: {
    modules: ['./node_modules'],
    extensions: ['.ts', '.ts', '.js'],
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'src/clr-icons/tsconfig.icons.json',
            },
          },
        ],
      },
    ],
  },
};
