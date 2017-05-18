/// <binding ProjectOpened='Watch - Development' /> 
"use strict";


var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        "/ClassWork/built/bundle1": "./ClassWork/jsx/Classwork1.jsx",
        "/ClassWork/built/bundle2": "./ClassWork/jsx/Classwork2.jsx",
        "/ClassWork/built/bundle3": "./ClassWork/jsx/Classwork3.jsx",
        "/HomeWork/built/bundle1": "./HomeWork/jsx/HomeWork1.jsx",
        "/HomeWork/built/bundle2": "./HomeWork/jsx/HomeWork2.jsx",
        "/HomeWork/built/bundle3": "./HomeWork/jsx/HomeWork3.jsx",
    },
    output: {
        filename: "[name].js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
      new WebpackNotifierPlugin(),
    ]
};