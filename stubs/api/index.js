const router = require("express").Router();

router.get("/getMainData", (req, res)=>{
    let answer = {
        "status":{
            "code":0
        },
        "mainData": require("./answer")
    }
})

module.exports = router;