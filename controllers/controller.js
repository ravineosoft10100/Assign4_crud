const proModel = require('../model/product');
const multer = require('multer');

function SaveProduct(req, res) {
    const { name, price, description } = req.body
    if(name.trim()&&price.trim()&&description.trim()){

        let ins = new proModel({name:name.trim(),price:price.trim(),description:description.trim()});
        ins.save((err) => {
            if (err) throw err;
        })
        res.render('addproduct', { succMsg: "Product added successfully!" })
    }
    else{

    }
}

async function getProductById(req, res) {
    let proId = req.params.id;
    let product = await proModel.findById(proId);
    if (!product) {
        res.status(404).send("Product id not found");
    }
    res.render('updatepro', { pdata: product });
}

async function getAllProduct(req, res) {

    proModel.find({}, (err, data) => {
        // console.log(data.id);
        res.render('home', { pdata: data.map(data => data.toJSON()) })
    })
}


function deleteProduct(req, res) {
    let pid = req.params.id;
    proModel.deleteOne({ _id: pid }, (err) => {
        if (err) { res.send("Something wrong") }
        else {
            res.status(200).redirect('/');
        }
    })
}

function updateProduct(req, res) {
    let pid = req.params.id;
    let formData = req.body;
    proModel.updateOne({ _id: pid }, { $set: formData }, (err) => {
        if (err) { console.log("Error") }
        else {
            // res.write("<script>alert('Product updated')</script>; <script>location.assign('home')</script>;");
            res.redirect('/');
        }
    })
}

module.exports = { SaveProduct, getProductById, getAllProduct, deleteProduct, updateProduct };