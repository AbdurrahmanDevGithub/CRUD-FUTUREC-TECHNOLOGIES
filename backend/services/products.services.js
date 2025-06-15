const productModel = require('../models/products.model')


const uploadProduct=async(productDetails)=>{
  try{
    const product = new productModel(productDetails)
    console.log(productDetails);
    if(!await product.save()){
      return{error:"product not stored",statuscode:409}
    }
    console.log("products stored successfuly");
    
    return productDetails

  }catch(error){
    console.log(error);
    return { error: "Error in uploadProduct services", statuscode:500 }; 
  }
}



const deleteProduct = async (productId) => {
  try {
    const deleted = await productModel.findByIdAndDelete(productId);

    if (!deleted) {
      return { error: "Product not found", statuscode: 404 };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Error in deleteProductService");
    return { error: "Error deleting product", statuscode: 500 };
  }
}

const updateProduct = async (productId, updatedData) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      { $set: updatedData },
      { new: true } 
    );

    if (!updatedProduct) {
      return { error: "Product not found", statuscode: 404 };
    }

    return updatedProduct;
  } catch (error) {
    console.log(error, "Error in updateProduct service");
    return { error: "Error updating product", statuscode: 500 };
  }
};

const getAllProducts = async () => {
  try {
    const products = await productModel.find();

    if (!products || products.length === 0) {
      return { error: "No products found", statuscode: 404 };
    }

    return products;
  } catch (error) {
    console.log(error, "Error in getAllProducts service");
    return { error: "Error fetching products", statuscode: 500 };
  }
};


module.exports={
  uploadProduct,
  deleteProduct,
  updateProduct,
  getAllProducts
}