const express = require('express');
const router = express.Router();



const userController = require('../../Controllers/user/user');
const middleware = require('../../auth');



router.post('/users',userController.register);
router.post('/login',userController.login);
router.get('/users',middleware.checkToken,userController.list);


module.exports= router;