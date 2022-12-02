const express = require('express');
const router = express.Router();
const productModel = require('../model/product');
const { SaveProduct, deleteProduct, getAllProduct, getProductById, updateProduct } = require('../controllers/controller')

router.get("/", getAllProduct)

router.get("/addproduct", (req, res) => {
    res.render('addproduct');
})

router.post('/add_pro', SaveProduct);
router.get('/updatepro/:id', getProductById);
router.post('/update_post/:id', updateProduct);
router.get('/delete/:id', deleteProduct);

module.exports = router;