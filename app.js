const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(mongoose())
require('dotenv/config');

const api = process.env.API_URL;

//app.listen(3000,()=>{
    app.get(`${api}/products`, (req,res)=>{
        const products = {
            id:1,
            name : 'shirts',
            image:'some_url',
        }
        res.send(products);
    })
    app.post(`${api}/products`, (req,res)=>{
        const newProduct = req.body;
        console.log(newProduct);
        res.send(newProduct);
    })
    mongoose.connect()
   
app.listen(3000,()=>{
    console.log(api);
    console.log('server is running http://localhost:3000');
})