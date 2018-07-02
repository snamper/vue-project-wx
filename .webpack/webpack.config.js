var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack=require('webpack');
var APP_PATH=""

module.exports = {
    //输入
    entry: {
        app: "./src/app/main.js",  //入口
        vendors: ['vue', 'vue-router','axios','jquery'] //公共js
    },
    //输出
    output: {
        path: path.resolve(__dirname, "../dist"),  //打包后路径
        filename: "[name].js",   //打包名称 app， vendor hash 版本
        chunkFilename: "[name].chunk.js",
        publicPath: ""
    },
    //
    resolve: { //模块的处理方案
        extensions: ['.js', '.vue', '.css', '.less', '.tpl', '.png', '.jpg'], //自动补全识别后缀
        alias: {  //设置模块别名
            'vue': 'vue/dist/vue.js'
        }
    },
    //加载器 模块的处理逻辑
    module: {
        rules: [//创建模块时，匹配请求的规则数组
            {
                test: /\.vue$/, loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'stage-0']}
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                loader: 'file-loader',
                query: {
                    name: 'images/[name]-[hash:5].[ext]'
                },
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.*$|$)/,
                loader: 'file-loader',
                query: {
                    name: 'font/[name]-[hash:5].[ext]'
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'less-loader']
                })
            },
        ]
    },
    plugins: [//插件
        new webpack.BannerPlugin('xiaoma vue frame'),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            moment: "moment"
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'})
    ]

};