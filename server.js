const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


// 引入users.js
const users = require('./routes/api/users');


const app = express();

// 使用routes
app.use('/api/users', users);


//区环境变量，如果么有那就是5001
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});