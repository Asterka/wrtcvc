const pkg = require("./package")

module.exports = {
    "webpackConfig":{
        "output":{
            "publicPath":`/static/uds-epjs/${pkg.version}/`
        }
},
    "navigations":{
            "repos": "/epjs"
    }
}