const productServices = require('../services/products.services')

const controller={
  uploadProduct:async(req,res)=>{
    try{
      const {name,price,quantity} = req.body

      const productResult = await productServices.uploadProduct({name,price,quantity})
      if(productResult.error){
        res.status(productResult.statuscode) .json({error:productResult.error})
      }
      return res.status(201) .json({message:"Product uploaded successfully",productResult})
    }catch(error){
      console.log(error,"Error in product upload controller");
    }
  },

  deleteProduct: async (req, res) => {
  try {
    const productId = req.params.id;

    const deleteResult = await productServices.deleteProduct(productId);
    if (deleteResult.error) {
      return res.status(deleteResult.statuscode).json({ error: deleteResult.error });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error, "Error in deleteProduct controller");
    return res.status(500).json({ error: "Internal server error" });
  }
},

updateProduct: async (req, res) => {
  try {
    const productId = req.params.id;
    const {name,price,quantity} = req.body;


    const updatedData = {
      name,price,quantity
    };
    

    const updateResult = await productServices.updateProduct(productId, updatedData);

    if (updateResult.error) {
      return res.status(updateResult.statuscode).json({ error: updateResult.error });
    }

    return res.status(200).json({ message: "Product updated successfully", updatedProduct: updateResult });
  } catch (error) {
    console.log(error, "Error in updateProduct controller");
    return res.status(500).json({ error: "Internal server error" });
  }
},

getAllProducts: async (req, res) => {
  try {
    const products = await productServices.getAllProducts();

    if (products.error) {
      return res.status(products.statuscode).json({ error: products.error });
    }

    return res.status(200).json({ products });
  } catch (error) {
    console.log(error, "Error in getAllProducts controller");
    return res.status(500).json({ error: "Internal server error" });
  }
}

}




module.exports=controller