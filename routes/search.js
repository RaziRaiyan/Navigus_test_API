const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// // search products
// app.get('/search',(req,res) => {
//     console.log(req.query.name);
//     // console.log(res.query);
//     res.send('Searched dummy product');
// });

router.get('/',async (req,res) => {
    const name = req.query.name;
    // const nameQuery = `/${name}/i`;
    console.log(name);
    try{
        const products = await Product.find({ name: name });
        res.json(products);
    }catch (e) {
        console.log(`error : ${e}`);
        // res.json({error: e});
    }
});

module.exports = router;











