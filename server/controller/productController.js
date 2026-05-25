const product = require("../models/productModel");
const uploadToCloudinary = require("../utilities/imageUpload");


//Creating Products
exports.create = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Image not found" });
    }

    const cloudinaryRes = await uploadToCloudinary(req.file.path); //updating to cloudinary uploading  updating after creation of imageUpload.js

    console.log(cloudinaryRes, "image Uploaded by cloudinary");

    const newProduct = new product({
      name,
      description,
      price,
      image: cloudinaryRes,
    });

    let savedProduct = await newProduct.save();

    if (savedProduct) {
      return res.status(200).json({ message: "product added", savedProduct });
    }

    console.log(req.file, "Image uploaded by multer");
  } catch (err) {
    console.log(err.message);
  }
};


//listing products
exports.listProducts = async (req, res) => {
    try {
        const productlist = await product.find()
        return res.status(200).json(productlist)
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }
}


//Getting single product
exports.productDetails = async (req, res) => {
    try {
        const { productId } = req.params
        const productDetails = await product.findById(productId ) 
        if (!productDetails) {
            return res.status(400).json({ error: "Product not found" })
        }
        return res.status(200).json(productDetails);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }
}


//updating product
exports.updateProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const { name, description, price } = req.body
        let imageUrl;

        let isProductExist = await product.findById(productId)
        if (!isProductExist) {
            return res.status(400).json({ error: "product not found" })
        }
        if (req.file) {
            const cloudinaryRes = await uploadToCloudinary(req.file.path)
            imageUrl = cloudinaryRes
        }
        const updatedProduct = await product.findByIdAndUpdate(productId, { name, description, price, image: imageUrl }, { new: true })
        res.status(200).json({ message: "Product updated", updatedProduct })

    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })

    }
}

//delete Product
exports.deleteProduct=async(req,res)=>{
    try {
           const { productId } = req.params
           const deletedProduct=await product.findByIdAndDelete(productId)
           if(!deletedProduct){
              return res.status(404).json({error:"product not found"})
           }
           return res.status(200).json({message:"Product deleted"})
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }
}
