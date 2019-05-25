const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { //входная точка сборки 
        app: './src/index.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {sourceMap: true}
            }, 
            {
              loader: 'postcss-loader',
              options: {sourceMap: true, config: {path:'src/js/postcss.config.js'}}
            },{
                loader: 'sass-loader',
                options: {sourceMap: true}
            }
            ]
        }, {
              test: /\.css$/,
              use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
              {
                  loader: 'css-loader',
                  options: {sourceMap: true}
              }, 
              {
                loader: 'postcss-loader',
                options: {sourceMap: true, config: {path:'src/js/postcss.config.js'}}
              }
            ]
          }
        ]
      },
    output: { //собранная сборка
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/dist/'
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
    devServer: { //настройки для devServer
        overlay: true
    }
}