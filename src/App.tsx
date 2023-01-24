import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
