const path = require('path');

module.exports = {
    mode: 'development',
    entry:'./test/test.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rule: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preser-env']
                },
            },

            },
        ],
    },
};