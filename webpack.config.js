const path = require("path");

module.exports = {
    entry: {
        app: ["whatwg-fetch", "@babel/polyfill", "proxy-polyfill", "./root/src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "./root/dist"),
        filename: "bundle.js",
        //publicPath: 'https://github.com/AlexanderKononenko210b/front_camp_2019_react_module.github.io/'
        publicPath: 'https://localhost:3000/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { 
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        useBuiltIns: "entry",
                                        corejs: 3,
                                        targets: { browsers: ["last 2 versions", "ie >= 11"] }
                                    }
                                ],
                                [
                                    "@babel/preset-react"
                                ]
                            ],
                            plugins: [
                                [
                                    "babel-plugin-transform-class-properties"
                                ],
                                [
                                    "@babel/plugin-syntax-dynamic-import"
                                ]
                            ],
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            { 
                test: /\.(png|jpg|gif|svg)$/, 
                loader: 'file-loader', 
                options: { name: './root/src/assets/posters/[name].[ext]?[hash]' } 
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'root/dist'),
        compress: true,
        port: 3000
    }
};