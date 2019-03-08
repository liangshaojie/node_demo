// 引入路由
const express = require('express');
const router = express.Router();

// 用于测试
router.get('/test', (req, res) => {
    res.json({ msg: 'login works' });
});

module.exports = router;