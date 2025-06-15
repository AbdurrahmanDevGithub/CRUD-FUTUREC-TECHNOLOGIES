const express = require("express")
const router = express.Router()

const productController = require('../controller/products.controller')


router.post("/upload",productController.uploadProduct)
router.get("/view",productController.getAllProducts)
router.put("/update/:id",productController.updateProduct)
router.delete("/delete/:id",productController.deleteProduct)



module.exports = router


