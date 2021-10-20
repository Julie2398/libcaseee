const express = require("express");

const booksRouter1 = express.Router();

const Bookdata = require("../model/Bookdata");



function router(nav4){
    
    booksRouter1.get("/",function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books1",
            {
                nav4,
                title:'Digital Library',
                books
            });
        })        
    });
       
    booksRouter1.get("/:id",function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book1",
            {
                nav4,
                title:'Digital Library',
                book
            });
        });
        
    });
  

    return booksRouter1;
}

module.exports = router;