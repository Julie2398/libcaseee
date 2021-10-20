const express = require("express");
const LoginRouter = express.Router();
const Userdata = require("../model/Userdata");
const signup=[
    {
        link:"/Signup",name:"Signup"
    }
];

function router(nav){
   
    LoginRouter.get("/",function(req,res){
        res.render("Login",{
            nav,
            title:'Digital Library',
            signup,
        });
    });
    LoginRouter.get("/loginmsg",function(req,res){
        res.render("loginmsg",{
            nav,
            title:'Digital Library',
            signup,
        });
    });
    LoginRouter.post("/add",function(req,res){
        var username = req.body.username;
        var password = req.body.password;

        Userdata.findOne({email:username,pwd:password},function(err,user){
            if(user)
            {
                res.redirect("/home1"); 
            }
            else if((username == "admin@gmail.com") && (password == "admin"))
            {
                res.redirect("/home");  
            }
            else{
                if (!user)
                  {
                    res.redirect("/login/loginmsg"); 
                  }
                else
                  {
                      console.log(err);
                  }  
                }
        })
    })
    

    return LoginRouter;
}

module.exports = router;
