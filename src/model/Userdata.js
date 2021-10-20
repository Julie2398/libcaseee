const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology',true);

mongoose.connect('mongodb+srv://userone:userone@ictakfiles.dijvc.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email:String,
    mobile:String,
    pwd:String,
    Repwd:String
});

var Userdata = mongoose.model("userdata",UserSchema);

module.exports = Userdata;