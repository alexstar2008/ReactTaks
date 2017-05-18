/// <binding ProjectOpened='Watch - Development' />
"use strict";

module.exports = {
    entry: {
        "Classwork/ClassWork1/build/bundle": "./Classwork/ClassWork1/src/main.jsx",
        "Classwork/ClassWork2/build/bundle": "./Classwork/ClassWork2/src/main.jsx",
        "Classwork/ClassWork3/build/bundle": "./Classwork/ClassWork3/src/main.jsx",
        "Homework/HomeWork1/build/bundle": "./Homework/HomeWork1/src/main.jsx",
        "Homework/HomeWork2/build/bundle": "./Homework/HomeWork2/src/main.jsx"

    } ,

    output: {
        filename: '[name].js'
    },
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
};
