
import Login from "./components/login/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadProducts from "./components/products/UploadProducts";
import ViewDeleteUpdate from "./components/products/ViewDeleteUpdate";
import Home from "./pages/Home";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<UploadProducts />} /> 
        <Route path="/view" element={<ViewDeleteUpdate />} /> 
      </Routes>
    </BrowserRouter>
     
 
    </>
  )
}

export default App
