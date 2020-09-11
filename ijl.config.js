const pkg = require("./package")

module.exports = {
    "apiPath":"stubs/api",
    "webpackConfig":{
        "output":{
            "publicPath":`/static/wrtcvc/${pkg.version}/`
        }
},
    "navigations":{
            "wrtcvc": "/wrtcvc",
    },
    "config":{
        "wrtcvc.api.base":"/api",
    }
}