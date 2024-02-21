const express = require("express");
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const app = express()

app.use(express.json());

app.get('/', (req, resp) => resp.send('Welcome to my crup-api project from FCC!'));

app.get('/api/products/', async (req, resp) => {
    try {
        const products = await Product.find({});
        resp.status(200).json(products);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
})

app.get('/api/products/:id', async (req, resp) => {
    try {
        const product = await Product.findById(req.params.id);
        resp.status(200).json(product);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
})

app.post('/api/products', async (req, resp) => {
    try {
        const product = await Product.create(req.body);
        resp.status(201).json(product);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
});

app.put('/api/products/:id', async (req, resp) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body);
        resp.status(200).json(updatedProduct);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
});

app.delete('/api/products/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        
        if(!product){
            resp.status(404).json({message: `Product with id: ${id} does not exist!`})
        } else {
            resp.status(200).json({message: `Product's ${id} deleted successfully!`});
        }
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
})

mongoose.connect('mongodb+srv://dbAdmin:VcvSjBiPbAkek26V@backend-db.eznzib6.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('Atlas DB Connected!');
        app.listen(3000, () => console.log("CRUD API For absolute beginners!"));
    })
    .catch((e) => console.log(`connection failed with message: ${e.message}`));