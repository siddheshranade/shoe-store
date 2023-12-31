import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Product from './pages/Product';
import ViewCart from './pages/ViewCart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './App.module.css';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className={styles.pageContainer}>
        <Navbar />
        <div className={styles.contentWrap}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/view-cart' element={<ViewCart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
