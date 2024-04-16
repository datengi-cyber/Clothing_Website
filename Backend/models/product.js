// const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema(
//   {
//     userID: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'users',
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     manufacturer: {
//       type: String,
//       required: true,
//     },
//     quentity: {
//       type:Number,
//       required: true,
//     },
//     stock: {
//       type: Number,
//       required: false,
//     },
//     description: String,
//   },
//   { timestamps: true }
// );


// const Product = mongoose.model("product", ProductSchema);
// module.exports = Product;

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: false,
    },
    description: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;