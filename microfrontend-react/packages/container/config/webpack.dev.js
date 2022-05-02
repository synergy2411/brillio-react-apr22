const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    devServer: {
        port: 9090,
        historyApiFallback: {
            index : "public/index.html"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name : "container",
            remotes : {
                marketingApp : "marketing@http://localhost:9091/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}

module.exports = merge(commonConfig, devConfig);