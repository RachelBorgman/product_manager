const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String , 
        required: [true, "Title Required"],
        minlength: [3, "Must be at least 3 characters long"]
    },
    price: { 
        type: Number,
        required: [true, "Price Required"],
    },
    description:  { 
        type: String , 
        required: [true, "Description Required"],
        minlength: [3, "Must be at least 3 characters long"]
    }
}, { timestamps: true });


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;