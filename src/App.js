import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">

      <BrowserRouter >
      <AppNavbar />


      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
