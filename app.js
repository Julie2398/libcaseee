const express = require("express");
const port = process.env.PORT || 5000;

const app = express();
const nav = [
    {
        link:"/books",name:"Books"
    },
    {
        link:"/authors",name:"Authors"
    },
    {
        link:"/Login",name:"Login"
    }
];
const nav1 = [
    {
        link:"/books/addBook",name:"Add New Book"
    },
    {
        link:"/authors/addAuthor",name:"Add New Author"
    }      
];
const nav2 = [
    {
        link:"/",name:"Log out"
    }  
];
const nav3 = [
    {
        link:"/updateAuthor",name:"Update Author"
    },
    {
        link:"/updateBook",name:"Update Book"
    },
    {
        link:"/deleteAuthor",name:"Delete Author"
    },
    {
        link:"/deleteBook",name:"Delete Book"
    }
];
//for normal users
const nav4 = [                      
    {
        link:"/books1",name:"Books"
    },
    {
        link:"/authors1",name:"Authors"
    },
    {
        link:"/",name:"Log out"
    }      
];

const booksRouter = require("./src/routes/bookRoutes")(nav,nav1,nav2,nav3)
const authorRouter = require("./src/routes/authorRoutes")(nav,nav1,nav2,nav3)
const LoginRouter = require("./src/routes/LoginRoutes")(nav)
const SignupRouter = require("./src/routes/SignupRoutes")(nav)
const updateAuthorRouter = require("./src/routes/updateAuthorRoutes")(nav,nav1,nav2,nav3)
const updateBookRouter = require("./src/routes/updateBookRoutes")(nav,nav1,nav2,nav3)
const deleteAuthorRouter = require("./src/routes/deleteAuthorRoutes")(nav,nav1,nav2,nav3)
const deleteBookRouter = require("./src/routes/deleteBookRoutes")(nav,nav1,nav2,nav3)


const booksRouter1 = require("./src/routes/bookRoutes1")(nav4)
const authorRouter1 = require("./src/routes/authorRoutes1")(nav4)



app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"))
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/authors",authorRouter);
app.use("/Login",LoginRouter);
app.use("/Signup",SignupRouter);
app.use("/updateAuthor",updateAuthorRouter);
app.use("/updateBook",updateBookRouter);
app.use("/deleteAuthor",deleteAuthorRouter);
app.use("/deleteBook",deleteBookRouter);


app.use("/books1",booksRouter1);
app.use("/authors1",authorRouter1);



app.get("/",function(req,res){
    res.render("index",
    {
        nav,
        title:'Digital Library'
    });
});

app.get("/home",function(req,res){
    res.render("home",
    {
        nav,
        title:'Digital Library',
        nav2
    });
});

app.get("/home1",function(req,res){
    res.render("home1",
    {
        nav4,
        title:'Digital Library',
        nav2
    });
});

app.listen(port,()=>{console.log("Server Ready at "+port)});