const path = require('path')
const Dotenv = require('dotenv-webpack')

const config = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                enforce: 'pre',
                loader: 'tslint-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.tsx?/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    plugins: [
        new Dotenv()
    ]
}

module.exports = config