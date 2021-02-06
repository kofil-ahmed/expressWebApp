const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3500;

const app = express();

const joinpath = express.static(path.join(__dirname,'../public'))
const templet_path = path.join(__dirname,'../template/views');
const partial_path = path.join(__dirname,'../template/partial');

app.use(joinpath);

//hbs
app.set('view engine','hbs');
app.set('views',templet_path);
hbs.registerPartials(partial_path)

app.get("/",(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404 error')
})

app.listen(port , ()=> console.log('server is on'))