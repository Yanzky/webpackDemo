// 编写配置文件，要有最基本的文件入口和输出文件配置信息等
// 里面还可以加loader和各种插件配置使用
var path = require('path');

// 自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// //方法一：
// module.exports = {
//     entry:[
//         'webpack/hot/dev-server',
//         'webpack-dev-server/client?http://localhost:8080',
//         path.resolve(__dirname,'src/js/guage.js')
//     ],
//     output: {
//         path: path.resolve(__dirname, 'deploy'),
//         filename: 'bundle.js',
//     },
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: "style!css" }
//         ]
//     },
//     plugins: [
//         new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'})
//     ]
// }

// 方法一：
module.exports = {
    entry: path.resolve(__dirname,'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'deploy'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.jsx?$/, loader: 'babel-loader', query: { presets: ['es2015']}}
        ]
    },
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'})
    ]
}

