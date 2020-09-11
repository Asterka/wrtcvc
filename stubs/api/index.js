const router = require("express").Router();
const adminRouter = require('./admin');


router.get("/getMainData", (req, res)=>{
    let answer = {
        "status":{
            "code":0
        },
        "mainData": require("./answer")
    }
})

router.use(adminRouter);

module.exports = router;