"use strict";

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    watch: true,
    module: {
        loaders: [
			{
			    test: /\.jsx?$/,
			    loader: "babel-loader",
			    query:
				{
				    presets: ['es2015', 'react']
				}
			}
        ]
    }
}