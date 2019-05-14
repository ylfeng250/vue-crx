let path = require('path')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    mode:'production',
    entry:{
        'background':'./src/background/background.js',
        'content':'./src/content/content.js',
        'option':'./src/option/option.js',
        'popup':'./src/popup/popup.js'
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        publicPath: './',
        filename: '[name].main.js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'option.html',
            template: 'src/option/option.html',
            inject: 'body',
            chunks: ["option"],
            minify: { //压缩
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: 'src/popup/popup.html',
            inject: 'body',
            chunks: ["popup"],
            minify: { //压缩
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from:path.resolve(__dirname,'src/manifest.json'),to:''},
            {from:path.resolve(__dirname,'static/'), to:'static/'}
        ])
    ],
    devtool: 'source-map',
    module:{
        rules:[
            {
                test: /\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test:/\.css$/,
                use:['vue-style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'src': path.resolve(__dirname,'src'),
        }
    },
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 600
    }
}