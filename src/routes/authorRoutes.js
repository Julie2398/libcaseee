const express = require("express");
const authorRouter = express.Router();
const Authordata = require("../model/Authordata");

// const multer= require ('multer');
// const path=require('path');
// const storage=multer.diskStorage({
//         destination:'./public/images/',
//         filename:function(req,file,cb){
//             cb(null,file.fieldname+'-'+Date.now() + path.extname(file.originalname));
//         }
// });
// const upload=multer({
//     storage:storage
// }).single('image');

function router(nav, nav1, nav2, nav3) {
    
    authorRouter.get("/", function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors",
                    {
                        nav,
                        title: 'Digital Library',
                        authors,
                        nav1,
                        nav2
                    });
            });

    });
    authorRouter.get("/addAuthor", function (req, res) {
        res.render("addAuthor",
            {
                nav,
                title: 'Digital Library',
                nav1,
                nav2
            
            });
    });



    authorRouter.post("/add", function (req, res) {

        var item = {
            name: req.body.name,
            genre: req.body.genre,
            dob: req.body.dob,
            image: req.body.image
        };
        var author = Authordata(item);
        author.save();
        res.redirect('/authors');
    });



    authorRouter.get("/:id", function (req, res) {
        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render("author",
                    {
                        nav,
                        title: 'Digital Library',
                        author,
                        nav1,
                        nav2,
                        nav3
                    });
            });

    });

    return authorRouter;
}
module.exports = router;