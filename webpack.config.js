const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["@babel/polyfill","./src/index.js"],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
                
            },
            {
                test: /\.(jpg | png | gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[path][name].[ext]',
                            context: '',
                            outputPath: './images'
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
         
        ]
    },
   
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
