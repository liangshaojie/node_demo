const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
app.get('/', function (req, res) {
    res.json({
        status: 'success',
        msg: "OK"
    })
})


//区环境变量，如果么有那就是5001
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});