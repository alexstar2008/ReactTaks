/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "ClassWork/build/bundle": "./ClassWork/src/Task1.jsx",
        "ClassWork/build/bundle2": "./ClassWork/src/Task2.jsx",
		"ClassWork/build/bundle3": "./ClassWork/src/Task3.jsx",
		"Homework/HomeWork1/build/bundle": "./Homework/HomeWork1/src/main.jsx",
		"Homework/HomeWork2/build/bundle": "./Homework/HomeWork2/src/main.jsx",
		"Homework/HomeWork3/build/bundle": "./Homework/HomeWork3/src/main.jsx"

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
                       presets: ['es2015', 'react'], 
					   //plugins: ['transform-object-rest-spread'] 
					}				
            }
			
        ]
    }
};