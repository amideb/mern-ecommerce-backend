const mongoose= require('mongoose')
const {ObjectId} = mongoose.Schema;

const productCartSchema = new mongoose.Schema({
    product :{
        type: ObjectId,
        ref:"Product"
    },
    name : String,
    count : Number,
    price: Number

});

const ProductCart = mongoose.model("ProductCart", productCartSchema)

const orderSchema = new mongoose.Schema({

    products: [productCartSchema],
    transaction_id:{},
    amount: {type: Number},
    address: String,
    updated: Date,
    user:{
        type: ObjectId,
        ref:"User"
    }

},
{timestamps:true}
);

const Order = mongoose.model("Order", orderSchema)

module.exports={Order, ProductCart};