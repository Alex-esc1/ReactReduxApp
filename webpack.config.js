const path = require ('path')

module.export = {
    mode: "development",
    entry: ".src/index.js",
    oytput: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    }
}