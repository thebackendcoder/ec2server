const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("the base route is working fine now 2")
})

app.listen(3000, () => {
    console.log("listening at port 3000")
})

