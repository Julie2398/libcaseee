const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.dijvc.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name : String,
    genre: String,
    dob: String,
    image: String
});

var Authordata = mongoose.model("authordata",AuthorSchema);

module.exports = Authordata;