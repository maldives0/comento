const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        app: path.join(__dirname, 'main')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader',
        },
        {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false,
                    }
                },
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        publicPath: '/dist',
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
        chunkFilename: '[name].js',
    },
};