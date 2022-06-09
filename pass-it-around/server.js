const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
    console.log('app is running on port: ', port)
})
app.get('/', (req, res)=>{
    res.send(" 99 bottles of beer on the wall" )
})