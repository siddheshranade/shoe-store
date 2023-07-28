import { useParams } from 'react-router-dom';

const Product = () => {
  let { id } = useParams();
  console.log('In <Product>, got Id: ', id);
  
  return <h1>Prod</h1>
};

export default Product;