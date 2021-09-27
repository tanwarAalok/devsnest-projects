const express = require("express");
const app = express();
const User = require("./models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const session = require('express-session');
var flash = require("connect-flash");

mongoose.connect("mongodb://localhost:27017/authDemo")
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION FAILED!!!");
        console.log(err)
    });


app.use(express.static(__dirname + "/public"));    
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

//-------------------------------------------------------

app.get("/", (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post("/register", async (req, res) => {
    const {password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    });
    await user.save();
    req.session.user_id = user.user_id;
    res.redirect("/");
});

//------------------------------------------------------------


app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user.password)
    if (validPassword) {
        req.session.user_id = user._id;
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
})

//--------------------------------------------------------------

app.post('/logout', (req, res) => {
    req.session.user_id = null;  // req.session.destroy() to destroy all data
    res.redirect('/login');
})

//--------------------------------------------------------------

app.get('/secret',requireLogin,  (req, res) => {
    res.render('secret');
});


//--------------------------------------------------------

app.listen(4000, () => {
    console.log("SERVING YOUR APP");
});