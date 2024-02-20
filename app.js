require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { checkForAuthenticationCookie } = require('./middleware/auth');

const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const Blog = require('./models/blog');

const app = express();
const PORT = process.env.PORT || 8000;


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')))


app.get('/', async (req,res)=>{
    const allBlogs = await Blog.find({});
    return res.render("home", {
        user: req.user,
        blogs: allBlogs
    });
})

app.use('/user',userRoute);
app.use('/blog',blogRoute);

mongoose.connect(process.env.MONGO_URL)
.then((e)=>console.log("Mongodb Connected"));

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));