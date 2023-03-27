import "./assets/styles/globals.scss";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  // const contactRef = useRef(null);

  return (
    <div className="main">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
