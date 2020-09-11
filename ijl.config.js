const pkg = require("./package")

module.exports = {
    "apiPath":"stubs/api",
    "webpackConfig":{
        "output":{
            "publicPath":`/static/wrtcvc/main/`
        }
},
    "navigations":{
            "repos": "/wrtcvc"
    },
    "config":{
        "wrtcvc.api.base":"/api"
    }
}