var path = require("path");

module.exports = {
    entry: {
        app: [
            './src/index.js',
            './src/index.html'
        ]
    },

    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                },
                exclude: [/node_modules/],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
        ]
    },

    devServer: {
        inline: true,
        stats: {colors: true}
    }
};
