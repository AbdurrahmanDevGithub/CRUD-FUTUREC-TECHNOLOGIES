import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';

const ViewDeleteUpdate = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editData, setEditData] = useState({ name: '', price: '', quantity: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/products/view');
      setProducts(res.data.products);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/products/delete/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  const startEditing = (product) => {
    setEditingProductId(product._id);
    setEditData({ name: product.name, price: product.price, quantity: product.quantity });
  };

  const cancelEditing = () => {
    setEditingProductId(null);
    setEditData({ name: '', price: '', quantity: '' });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const updateProduct = async (id) => {
    try {
      await axios.put(`http://localhost:3001/api/products/update/${id}`, editData);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? { ...product, ...editData } : product
        )
      );
      cancelEditing();
    } catch (error) {
      console.error('Error updating product:', error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {editingProductId === product._id ? (
                <div>
                  <input type="text" name="name" value={editData.name} onChange={handleEditChange} placeholder="Name" />
                  <input type="number" name="price" value={editData.price} onChange={handleEditChange} placeholder="Price" />
                  <input type="number" name="quantity" value={editData.quantity} onChange={handleEditChange} placeholder="Quantity" />
                  <button onClick={() => updateProduct(product._id)}>Save</button>
                  <button onClick={cancelEditing}>Cancel</button>
                </div>
              ) : (
                <div>
                  <strong>{product.name}</strong> - ${product.price} - Qty: {product.quantity}
                  <button onClick={() => deleteProduct(product._id)}>Delete</button>
                  <button onClick={() => startEditing(product)}>Update</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewDeleteUpdate;
