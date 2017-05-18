/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {

        "Classwork/build/bundle": "./Classwork/jsx/ClassWork1.jsx",
        "Classwork/build/bundle2": "./Classwork/jsx/ClassWork2.jsx",
        "Classwork/build/bundle3": "./Classwork/jsx/ClassWork3.jsx",

        "Homework/build/bundle": "./Homework/jsx/HomeWork1.jsx",
        "Homework/build/bundle2": "./Homework/jsx/HomeWork2.jsx",
        "Homework/build/bundle3": "./Homework/jsx/HomeWork3.jsx"

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
                    presets: ['react', 'es2015'],
                    plugins: ["transform-object-rest-spread", "transform-es2015-destructuring"]
                }
            }
        ]
    }
};