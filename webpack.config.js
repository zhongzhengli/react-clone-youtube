const webpack = require('webpack');
module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1'],
            },
        },
        {
            test: /\.css$/, loader: 'style-loader!css-loader',
        },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    // auto add import React from 'react'
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    },
};
