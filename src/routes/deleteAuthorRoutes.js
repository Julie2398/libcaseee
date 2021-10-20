const express = require('express');
const deleteAuthorRouter = express.Router();
const Authordata = require("../model/Authordata");

function router(nav, nav1, nav2, nav3) {


    deleteAuthorRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        Authordata.findOneAndDelete({_id:id},(err,doc)=>{
            if(!err){
                console.log("Author deleted"+doc);
                res.redirect('/authors');
            }
            else{
                console.log(err);
            }
        })
       
    });
    
    return deleteAuthorRouter;
}
module.exports = router;