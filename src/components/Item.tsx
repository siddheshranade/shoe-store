import styles from './Item.module.css';

const Item = (props: { id: any; brandName: any; shoeName: any; price: any; imgUrls: any; }) => {
  const { id, brandName, shoeName, price } = props;
  const imgUrl = `../../public/images/p-${id}-1.png`;
  
  return (
    <div className={styles.parent}>
      <img className={styles.image} src={imgUrl} />
      <p className={styles.brand}>{brandName}</p>
      <p className={styles.name}>{shoeName}</p>
      <p className={styles.price}>${price}</p>
    </div>
  )
};

export default Item;