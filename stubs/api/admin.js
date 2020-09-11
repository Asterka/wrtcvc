const router = require("express").Router()

const SET_DATABASE_URL = "/setAdmin"

router.get(`${SET_DATABASE_URL}/:data`, (req, res) => {
    console.log(req.params.data)
    switch(req.params.data){
        case "killVideo":
            res.send(`<h1>Killed Video</h1>`)
        break;
        case "reset":
            res.send(`<h1>Page's been reset</h1>`)
        break;    
        default:
            res.send(`<h1>Unknown operation</h1>`)
        break;
        }
})

router.get('/admin', (req, res)=>{
    const var1 = [
        {
            url:`/api${SET_DATABASE_URL}/killVideo`,
            key: "Remove video Section"
        },
        {
            url:`/api${SET_DATABASE_URL}/reset`,
            key: "Reset"
        }
    ]
    res.send(`
        <html>
        <head>
        <link rel="stylesheet" href="" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        </head>
            <ul>
            
            ${
                var1.map((variant)=>
                    `<li> <a href=${variant.url}>${variant.key}</a> </li>`)
            }

            </ul>

        </html>
    `)
})

module.exports = router