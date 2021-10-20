const express = require("express");
const authorRouter1 = express.Router();
const Authordata = require("../model/Authordata");



function router(nav4) {
   
    authorRouter1.get("/", function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors1",
                    {
                        nav4,
                        title: 'Digital Library',
                        authors,
                    });
            });

    });
    
    
    authorRouter1.get("/:id", function (req, res) {
        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render("author1",
                    {
                        nav4,
                        title: 'Digital Library',
                        author
                    });
            });

    });

    return authorRouter1;
}
module.exports = router;