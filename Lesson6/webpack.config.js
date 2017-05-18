/// <binding ProjectOpened='Watch - Development' />

"use strict";

module.exports = {
    entry: {

        "Classwork/ClassWork1/build/bundle": "./Classwork/ClassWork1/jsx/index.jsx",
        "Classwork/ClassWork2/build/bundle": "./Classwork/ClassWork2/jsx/index.jsx",
        "Classwork/ClassWork3/build/bundle": "./Classwork/ClassWork3/jsx/index.jsx",

        "Homework/HomeWork1/build/bundle": "./Homework/HomeWork1/jsx/main.jsx",
        "Homework/HomeWork2/build/bundle": "./Homework/HomeWork2/jsx/main.jsx",
        "Homework/HomeWork3/build/bundle": "./Homework/HomeWork3/jsx/main.jsx",
    } ,

    output: {
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
				exclude: /node_modules/,
				query: {

					presets: ["es2015","react"],
					plugins: ["transform-object-rest-spread"]

				}
            }
        ]
    }
};
