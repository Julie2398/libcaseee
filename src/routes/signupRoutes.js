const express = require("express");
const SignupRouter = express.Router();
const Userdata = require("../model/Userdata");

let mssg = "";
function router(nav) {

    SignupRouter.get("/", function (req, res) {
        res.render("Signup", {
            nav,
            title: 'Digital Library'
        });
    });

  

    SignupRouter.post("/add", function (req, res) {
        var email = req.body.email;
       

        Userdata.findOne({ email: email }, function (err, user) {
            if (err) {
               
                console.log(err);
            }
            else if (!user) {

             
                var item = {
                    name: req.body.name,
                    email: req.body.email,
                    country: req.body.country,
                    pwd: req.body.pwd,
                    Repwd: req.body.Repwd
                }
                var users = Userdata(item);
                users.save();
                mssg = "Registration Successfull.Login to continue"
                res.redirect("/Signup/signupmsg");
            }
            else {
               
                mssg = "User alreasy exists.Login to continue"
                res.redirect("/Signup/signupmsg");
            }
        })
    });

    SignupRouter.get("/signupmsg", function (req, res) {
        res.render("signupmsg", {
            nav,
            title: 'Digital Library',
            mssg
        });
    });

    return SignupRouter;
}

module.exports = router;