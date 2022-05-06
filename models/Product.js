const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {type: String, required:true},
    id: {type: Number, required:true},
    desc: {type: String, required:true},
    img: {type: String, required:true},
    categories: {type: Array, required:true},
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true},
},
{timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);