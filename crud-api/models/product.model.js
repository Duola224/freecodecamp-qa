const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name can't be empty!"],
    },
    quantity: {
        type: Number,
        required: [true, "It's important to prevent client the amount of product we have!"],
        default: 0
    },
    price: {
        type: Number,
        required: [true, "Product price is needed!"],
        default: .99
    },
    image: {
        type: String,
        required: false
    }
},
{
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;