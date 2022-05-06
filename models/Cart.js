const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userName: {type: String, required:true},
    products: [
        {
            productId: {type: Number},
            quantity:  {type: Number, default: 1}
        }
    ]
},
{timestamps: true}
);

module.exports = mongoose.model("Product", CartSchema);