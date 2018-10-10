
module.exports = {
    entry: ['babel-polyfill', './client/index.js'],
    module: {
        rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    }
   };