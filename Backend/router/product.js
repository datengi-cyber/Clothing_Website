const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

// Middleware to parse JSON bodies (using Express's built-in middleware)
router.use(express.json());

// Add Product
router.post("/api/product/add", productController.addProduct);

// Get All Products by User ID
router.get("/api/product/get/:userId", productController.getAllProducts);

// Delete Selected Product Item
router.delete("/api/product/delete/:id", productController.deleteSelectedProduct);

// Update Selected Product
router.put("/api/product/update/:id", productController.updateSelectedProduct);

// Search Product
router.get("/api/product/search", productController.searchProduct);

module.exports = router;
