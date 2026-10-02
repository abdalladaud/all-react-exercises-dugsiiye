import ProductItem from "./ProductItem";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
  },
  {
    id: 2,
    name: "Phone",
    price: 500,
  },
  {
    id: 3,
    name: "Headphones",
    price: 100,
  },
];

function ProductList() {
  return (
    <div className="products-section">
      <h2>Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;