const express = require('express');
const deleteBookRouter = express.Router();
const Bookdata = require("../model/Bookdata");

function router(nav, nav1, nav2, nav3) {


    deleteBookRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        Bookdata.findOneAndDelete({_id:id},(err,doc)=>{
            if(!err){
                console.log("Book deleted"+doc);
                res.redirect('/books');
            }
            else{
                console.log(err);
            }
        })
    });
  


    return deleteBookRouter;
}
module.exports = router;