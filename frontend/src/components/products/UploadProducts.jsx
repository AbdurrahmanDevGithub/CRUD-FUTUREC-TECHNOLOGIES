import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/Navbar';

const UploadProducts = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !quantity) {
      toast.error('All fields are required');
      return;
    }

    const product = {
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity)
    };

    try {
      await axios.post('http://localhost:3001/api/products/upload', product);
      toast.success('Product uploaded successfully');

      setName('');
      setPrice('');
      setQuantity('');
    } catch (error) {
      toast.error(
        error.response?.data?.error || 'Failed to upload product'
      );
    }
  };

  return (
    
    <div>
      <Navbar />
      <ToastContainer />

      <h2>Upload Product</h2>

      <form onSubmit={handleSubmit}>
        Product Name: <br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

        Price: <br />
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)}/><br /><br />

        Quantity: <br />
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} /><br /><br />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadProducts;
