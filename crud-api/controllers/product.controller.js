const { model } = require('mongoose');
const Product = require('../models/product.model.js');

// GET ALL Products
const getProducts = async (req, resp) => {
    try {
        const products = await Product.find({});
        resp.status(200).json(products);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
}

// GET A Product
const getProduct = async (req, resp) => {
    try {
        const product = await Product.findById(req.params.id);
        resp.status(200).json(product);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
}

// CREATE A NEW Product
const createProduct = async (req, resp) => {
    try {
        const product = await Product.create(req.body);
        resp.status(201).json(product);
    } catch (error) {
        console.log(req);
        resp.status(500).json({ message: error.message });
    }
};

// Update A Product
const updateProduct = async (req, resp) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body);
        resp.status(200).json(updatedProduct);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};

// DELETE A Product
const deleteProduct = async (req, resp) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            resp.status(404).json({ message: `Product with id: ${id} does not exist!` })
        } else {
            resp.status(200).json({ message: `Product's ${id} deleted successfully!` });
        }
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};