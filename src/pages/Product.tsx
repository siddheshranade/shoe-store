import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import styles from "./Product.module.css";
import { useCart } from '../context/CartContext';


const desc = `Energize your look with a fresh take on heritage adidas style. The adidas Daily 
  3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute 
  across town has never looked or felt this good.`;

const Product = () => {
  const { addToCart, cartItems } = useCart();
  const {id, brandName, shoeName, price} = useLocation().state.product;
  const imageUrl = `../../public/images/`;
  const inputQuantRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: { preventDefault: () => void; }) => {
    console.log(event);
    event.preventDefault();
    let quantity = parseInt(inputQuantRef.current ? inputQuantRef.current.value : '0');
    
    addToCart(id, quantity);
    setTimeout(() => {
      console.log('quant: ', quantity);
      console.log('cartItems: ', cartItems.length, cartItems);
    }, 3000)

  };
  
  return (
    <div className={styles.container}>

      <div className={styles.carousel}>
        <img src={`${imageUrl}p-${id}-1.png`} />
      </div>

      <div className={styles.addToCart}>
        <div className={styles.addToCartText}>
          <p className={styles.addToCartBrand}>{brandName}</p>
          <p className={styles.addToCartShoe}>{shoeName}</p>
          <p className={styles.addToCartPrice}>${price}</p>
        </div>
        <hr></hr>
        <form onSubmit={submitHandler} className={styles.addToCartForm}>
          <label htmlFor='inputQuant'>Quantity</label>
          <input
          ref={inputQuantRef}
          id='inputQuant' 
          type='number'
          min= '1'
          max= '20'
          step= '1'
          defaultValue= '1'
          />
          <button>Add to Cart</button>
        </form>
      </div>
      
      <div className = {styles.desc}>
        <h2>Description</h2>
        <hr></hr>
        <p>{desc}</p>
        <ul>
          <li>Regular fit</li>
          <li>Lace closure</li>
          <li>Rubber outsole with vulcanized look</li>
          <li>Imported</li>
        </ul>
      </div>

      <div className = {styles.finalImage}>
        <img src={`${imageUrl}p-${id}-4.png`} />
      </div>
    </div>
  )
};

export default Product;