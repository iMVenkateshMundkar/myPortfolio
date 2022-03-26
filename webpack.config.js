let path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.(png|jpe?g|gif|svg)$/i, use: [{ loader: "file-loader"}] },
            {
                loader: 'babel-loader',
                test: '/\.(js|jsx)$/',
                exclude: /node_modules/
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            }
        ]
    }
}