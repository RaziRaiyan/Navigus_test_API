const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
    // res.send('Fetch all products');
    try{
        const products = await Product.find();
        res.json(products);
    }catch (e) {
        console.log(`error : ${e}`);
        // res.json({error: e});
    }
});

// Submits a POST
router.post('/', async (req, res) => {
    // console.log(req.body);
    const product = new Product({
        name: req.body.name,
        isFavorite: req.body.isFavorite,
        description: req.body.description,
        image_url: req.body.image_url
    });
    try {
        const savedProduct = product.save();
        res.json(savedProduct);
    } catch (e) {
        res.json({error: e});
    }
});

// GET Specific Product according to it's <>
router.get('/:productID',async (req,res) => {
    try{
        const product = await Product.findById(req.params.productID);
        res.json(product);
    }catch (e) {
        res.json({error: e});
    }
});

module.exports = router;