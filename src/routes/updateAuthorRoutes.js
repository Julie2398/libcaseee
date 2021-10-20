const express = require('express');
const updateAuthorRouter = express.Router();
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


    updateAuthorRouter.get('/:id', function (req, res) {
        const id = req.params.id;

        res.render('updateAuthor',
            {
                nav,
                title: 'Digital Library',
                nav1,
                nav2,id
            });
       
    });
    updateAuthorRouter.post('/update/:id', function (req, res) {
        const id = req.params.id;

        var item = {
            name: req.body.name,
            genre: req.body.genre,
            dob: req.body.dob,
            image: req.body.image
        };
        console.log(id);


        Authordata.findOneAndUpdate({ _id: id }, item , { new: true },(err,doc)=>{
            if(!err){
                console.log(doc);
                res.redirect('/authors');
            }
            else{
                console.log(err);
            }
        })
            
    });


    return updateAuthorRouter;
}
module.exports = router;