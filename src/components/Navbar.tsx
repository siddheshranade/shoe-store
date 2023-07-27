import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.parent}>
      <Link to='/' className={styles.logo}>
        <img src='../../public/images/logo-black.svg'/>
      </Link>
      <Link to='/view-cart' className={styles['cart-parent']}>
        <div className={styles['cart-button']}>
          <img src='../../public/images/bag-icon.svg' />
          <p className={styles['cart-text']}>View Cart</p>
          <div className={styles['cart-quantity']}></div>
        </div>        
      </Link>
    </nav>
  )
};

export default Navbar;