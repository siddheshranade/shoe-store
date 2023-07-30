import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.length;

  return (
    <nav className={styles.parent}>
      <Link to='/' className={styles.logo}>
        <img src='../../public/images/logo-black.svg'/>
      </Link>
      <Link to='/view-cart' className={styles.cartParent}>
        <div className={styles.cartButton}>
          <img src='../../public/images/bag-icon.svg' />
          <p>View Cart</p>
          {totalQuantity !== 0 && <div className={styles.cartQuant}>
          <p>{totalQuantity}</p>
          </div>}
          
        </div>        
      </Link>
    </nav>
  )
};

export default Navbar;