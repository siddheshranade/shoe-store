import storeItems from "../data/items.json";
import Item from "../components/Item";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const ItemsList = storeItems.map((eachItem) => (
    <Link
      to={`/product/${eachItem.id}`}
      key={eachItem.id}
      className={styles.productLink}
    >
      <Item {...eachItem} />
    </Link>
  ));

  return (
    <div className={styles.parent}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h2 className={styles.bannerText1}>25% OFF</h2>
          <h2 className={styles.bannerText2}>Summer Sale</h2>
          <p className={styles.bannerText3}>
            Discover our summer styles with discount
          </p>
          <div className={styles.bannerBtn}>
            <p>Shop Now</p>
            <img src="../../public/images/right-arrow.png" />
          </div>
        </div>
        <img src="../../public/images/banner-shoe.svg" className={styles.bannerShoe} />
      </div>
      <h2 className={styles.midHeading}>Explore our latest drops</h2>
      <div className={styles.itemsListContainer}>{ItemsList}</div>
    </div>
  );
};

export default Home;
