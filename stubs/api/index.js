const path = require('path');
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

router.get("/getImage", (req, res)=>{
    let params = req.query.id;

    if(params === "1"){
        console.log("Yes")
    }
    
    res.sendFile(path.resolve(`${__dirname}../../../static/me.jpg`));
})

router.use(adminRouter);

module.exports = router;