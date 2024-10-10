import Slider from "./Slider";
import Product from "./Product";

const Home = ({products, addToCart}) => {
  return (
    <div>
      <Slider />
      <Product products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
