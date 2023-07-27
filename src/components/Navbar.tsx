import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.all}>
      <div>
        <Link to='/'><img src='../../public/images/logo-black.svg'/></Link>
        <Link to='/view-cart'>
          <button>
            Cart
            <div>3</div>
          </button>
          </Link>
      </div>
      <div></div>
    </nav>
  )
};

export default Navbar;