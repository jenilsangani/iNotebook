const express = require('express');
const User = require('../models/User');
const router = express.Router();


//Create a User using: POST "/api/auth/", Dosn't require Auth
router.post('/', (req, res)=>{
    console.log(req.body);
    req.body.date = new Date();
    const user = User(req.body);
    user.save();
    res.send(req.body)
})
module.exports = router;