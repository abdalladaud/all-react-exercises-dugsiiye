import { useContext } from "react";
import { CartContext } from "../CartContext";

function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;