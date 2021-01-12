const express = require('express')
const app = express()
const port = 3000

app.get('/r', (req, res) => {
    let delay = req.query.delay;

    if(delay){
        let delayN = parseInt(delay)
        if(delayN){
            setTimeout(()=>{
                res.send(`Hello World! -- Delayed: ${delayN} seconds`)
            },delayN*1000);
            return
        }
    }

    res.send('Hello World!')
  })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })