const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        modules: [
            'react',
            'react-dom',
            'react-scripts'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].dll.js',
        library: '[name]'
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCssAssetsPlugin(),
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json')
        })
    ]
}

