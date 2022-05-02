const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode :"development",
    devServer : {
        port : 9000
    },
    plugins : [
        new ModuleFederationPlugin({
            name : "container",
            remotes : {
                products : "products@http://localhost:9001/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template : "./public/index.html"
        })
    ]
}