import { CartProvider } from "./CartContext";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";

function App() {
  return (
    <CartProvider>
      <div>
        <h1>My Shopping App</h1>

        <ProductList />

        <CartSummary />
      </div>
    </CartProvider>
  );
}

export default App;