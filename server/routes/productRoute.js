const express=require('express')
const upload = require('../middleware/Multer')
const { create, listProducts, productDetails, updateProduct, deleteProduct } = require('../controller/productController')
const { authAdmin } = require('../middleware/authAdmin')
const router=express.Router()

router.post('/create',authAdmin,upload.single("image"),create)
router.get('/listproduct',listProducts)
router.get('/productdetails/:productId',productDetails)
router.put('/update/:productId',authAdmin,upload.single("image"),updateProduct)
router.delete('/deleteproduct/:productId',authAdmin,deleteProduct)

module.exports=router


//part13 complted