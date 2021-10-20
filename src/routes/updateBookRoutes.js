const express = require('express');
const updateBookRouter = express.Router();
const Bookdata = require("../model/Bookdata");

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


    updateBookRouter.get('/:id', function (req, res) {
        const id = req.params.id;

        res.render('updateBook',
            {
                nav,
                title: 'Digital Library',
                nav1,
                nav2,id
            });
       
    });
    updateBookRouter.post('/update/:id',function (req, res) {
        const id = req.params.id;

        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        };
        console.log(id);


        Bookdata.findOneAndUpdate({ _id: id }, item , { new: true },(err,doc)=>{
            if(!err){
                console.log(doc);
                res.redirect('/books');
            }
            else{
                console.log(err);
            }
        })
            
    });


    return updateBookRouter;
}
module.exports = router;