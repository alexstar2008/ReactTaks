"use strict";

module.exports = {
    entry: "./src/main.jsx",
    output: {
        path:__dirname+'/build/',
        filename: "bundle.js"
    },
    watch:true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets:['es2015','react']
                }
            }
        ]
    }
};