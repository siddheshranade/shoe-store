import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.parent}>
      <Link to='/' className={styles.logo}>
        <img src='../../public/images/logo-black.svg'/>
      </Link>
      <Link to='/view-cart' className={styles.cartParent}>
        <div className={styles.cartButton}>
          <img src='../../public/images/bag-icon.svg' />
          <p>View Cart</p>
          <div></div>
        </div>        
      </Link>
    </nav>
  )
};

export default Navbar;