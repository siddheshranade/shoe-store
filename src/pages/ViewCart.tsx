import { useCart } from '../context/CartContext';
import defaultStoreItems from "../data/items.json";
import styles from './ViewCart.module.css';

const shippingCost = 20;
const tax = 6;
const discount = 6;

const ViewCart = () => {
  const { cartItems: currentCartItems, modifyCart } = useCart();
  let cartIds = currentCartItems.map(each => each.id);
  let cartItemsToDisplay = defaultStoreItems.filter(each => 
    cartIds.includes(each.id)
  );

  let subTotal = currentCartItems.reduce((total, currentItem) => {
    const itemPrice = defaultStoreItems.find(item => item.id === currentItem.id)?.price || 0;
    return total + (currentItem.quantity * itemPrice);
  }, 0);

  const quantityChangeHandler = (itemId: number, e: any) => {
    let newQuantity = e.target.value;
    console.log(itemId, newQuantity);
    modifyCart(itemId, newQuantity);
  }

  const removeItemHandler = (itemId: number) => {
    modifyCart(itemId, 0); // 0 quantity automatically removes item
  }
  
  let bagItems = cartItemsToDisplay.map(item => {
    const quantity = 
      currentCartItems.find(each => each.id === item.id)?.quantity;

    return (
      <div className={styles.bagContainer}>
        <div className={styles.bagImageDiv}>
          <img src={`../../public/images/p-${item.id}-1.png`} />
        </div>
        <div className={styles.bagDetailsDiv}>
          <div className={styles.bagDetailsText}>
            <div className={styles.bagDetailsTextLineOne}>
              <p>{item.brandName}</p>
              <p>${item.price}</p>              
            </div>
            <p className={styles.bagDetailsTextLineTwo}>{item.shoeName}</p>
          </div>
          <div className={styles.bagDetailsModify}>
            <input
            onChange={e => quantityChangeHandler(item.id, e)}            
            type='number'
            min= '1'
            max= '20'
            step= '1'
            defaultValue= {quantity}
            />
            <p 
              className={styles.bagDetailsRemove}
              onClick={() => removeItemHandler(item.id)}
              >
              Remove
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.bag}>
        {currentCartItems.length ? <h2>Your Bag</h2> : <h2>Your bag is empty!</h2>}
        {bagItems}
      </div>

      <div className={styles.summary}>
        <h2>Summary</h2>
        <div className={styles.summaryText}>
          <p>Subtotal</p>
          <p>${subTotal}</p>
        </div>
        <div className={styles.summaryText}>
          <p>Shipping and delivery</p>
          <p>${shippingCost}</p>
        </div>
        <div className={styles.summaryText}>
          <p>Tax</p>
          <p>${tax}</p>
        </div>
        <div className={styles.summaryText}>
          <p>Discount</p>
          <p style={{color: '#EC5E2A'}}>-${discount}</p>
        </div>
        <hr/>
        <div className={styles.summaryTotal}>
          <p>Total</p>
          <p>${subTotal + shippingCost + tax - discount}</p>
        </div>
        <div className={styles.summaryCheckoutBtn}>
          <p>Checkout</p>
        </div>
      </div>
    </div>
  )
};

export default ViewCart;