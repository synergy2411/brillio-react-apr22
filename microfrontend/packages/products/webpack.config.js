const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode : "development",
    devServer : {
        port : 9001
    },
    plugins : [
        new ModuleFederationPlugin({
            name : "products",
            filename : "remoteEntry.js",
            exposes : {
                "./productIndex" : "./src/index.js"
            }
        }),
        new HtmlWebpackPlugin({
            template : "./public/index.html"
        })
    ]
}