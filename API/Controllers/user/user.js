
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../Models/user/user');
const config = require('../../config');



exports.register = function(req,res){

    let user = new User({
        username :req.body.username,
        phone_no : req.body.phone_no,
        password: req.body.password,
        role:'student'
    });

    User.findOne({"phone_no":user.phone_no},(err,data)=>{
      if(data){
          res.json({
            success:false,
            msg:"User is already taken !"
          });
      }
      else{
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(user.password, salt, function(err, hash) {
          
            user.password = hash;
            user.save((err)=>{
                if (err) throw err;
                res.json({
                    success:true,
                    user:user,
                    msg:"User is successfully created.Please Log In"
                });
            });
              
          });
        });
    }

    });  
    
}
// login route and generate json web token
exports.login = function(req, res) {
    const login_user = req.body;

    if(!login_user.username || !login_user.password){
      res.json({
        success:false,
        msg:"Please include username and password"
      });
    }
    else{
      
      User.findOne({"username":login_user.username},(err,data)=>{
      
        if(!data){
          res.json({
            success:false,
            msg:"username doesn't exit"
          });
        }
        else{
          bcrypt.compare(login_user.password, data.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch){
              res.json({
                success:false,
                msg:"Password doesn't match"
              });
            }
            else{
              let token = jwt.sign({username: login_user.username},
                config.secret,
                { expiresIn: '24h' // expires in 24 hours
                }
              );
              // return the JWT token for the future API calls
              res.json({
                success: true,
                msg: "Authentication successful!",
                token,
                user:data
              });
            }  
          });
        }
      });
    }
}

// get all users

exports.list = function(req,res){
  User.find({},(err,data)=>{
    if (err) throw err;
    res.json({
      success:true,
      users:data
    });
  });

}
