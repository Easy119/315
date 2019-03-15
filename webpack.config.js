const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.resolve(__dirname, "./src/main.js"),
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        host: "localhost",
        compress: true,
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test:/\.less$/,
            loader:["style-loader","css-loader","less-loader"]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: ' React webpack 学习', // 默认值：Webpack App
            filename: 'index.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/main.html'),
            inject: true
        }),
    ]
}