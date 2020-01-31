const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
// Import routes
const productRoute = require('./routes/products');
const searchRoute = require('./routes/search');

// Middlewares
app.use(bodyParser.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin',".");
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Accept, Authorization, Content-Type');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, PATCH');
        return res.status(200).json({});
    }
    next();
});
app.use('/search',searchRoute);
app.use('/products', productRoute);



// ROUTES
app.get('/',(req,res) =>{
    res.send(('We are at home'));
});


//
// // fetch all the products
// app.get('/products',(req,res) => {
//    res.send('Fetch all the products');
// });
//
// // search products
// app.get('/search',(req,res) => {
//     console.log(req.query.name);
//     // console.log(res.query);
//     res.send('Searched dummy product');
// });

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://raiyan_razi:IamONRz3357@@todocluster-cr5bd.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true },()=>{
    console.log('Connected to Cluster');
});

// Listening to the server at port 3000
app.listen(3000);