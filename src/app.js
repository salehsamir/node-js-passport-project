const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');

const ejs = require('ejs');
const User = require("../models/User");



const app = express();
require('./db/conn');

const port = process.env.PORT || 3000


app.use(express.static('public'));

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.render('index')

});
app.get('/register',(req,res)=>{
    res.render('register')

});
app.get('/login',(req,res)=>{
    res.render('login')

});
// post request

app.post('/register',(req,res)=>{
    const email = req.body.email;
    const password= req.body.password;

    const newUser = new User({
        email:email,
        password:password
    });
    newUser.save((err)=>{
        err? console.log(err) : res.send('successfully created')

    });

app.post('/login',(req,res)=>{
    const email = req.body.email;
    const password= req.body.password;
    User.findOne({email:email},(err,foundResults)=>{
        if(err){
            console.log(err)
        }else{
            if(foundResults.password === password){
                res.render('heloo')
            }else{
                res.send('incorrect email or password')

            }
        }
    })

})
    

});





app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);

});