const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("the base route is working ")
})

app.listen(3000, () => {
    console.log("listening at port 3000")
})

