/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
		
		"Classwork/build/bundle1": "./Classwork/src/ClassWork1.js",
		"Classwork/build/bundle2": "./Classwork/src/ClassWork2.js",
		"Classwork/build/bundle3": "./Classwork/src/ClassWork3.jsx",

        "Homework/build/bundle1": "./Homework/src/Homework1.js",
        "Homework/build/bundle2": "./Homework/src/Homework2.js",
        "Homework/build/bundle3": "./Homework/src/Homework3.jsx"

    },
           
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
                    
                        presets: ["es2015", "stage-0", "react"], 
                        plugins: ["transform-object-rest-spread", "transform-async-to-generator", "syntax-async-functions", "transform-runtime"]
                    
                }
            }
        ]
    }
};