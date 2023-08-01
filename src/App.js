import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <Product />
      </div>
    </div>
  );
}

export default App;
