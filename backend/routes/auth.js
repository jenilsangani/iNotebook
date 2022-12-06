const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        name:'jenil sangani',
        age:22 ,
        email:'jenilsangani2000@gmail.com',
        birth_Date:'27 April 2000'
    }
    res.json(obj)
})
module.exports = router