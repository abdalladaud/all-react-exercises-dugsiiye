import { useContext } from "react";
import { CartContext } from "../CartContext";

function CartSummary() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useContext(CartContext);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    alert("Checkout successful! 🎉");
    clearCart();
  };

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        marginTop: "30px",
      }}
    >
      <h2>Shopping Cart</h2>

      <p>
        Total Items: <strong>{totalItems}</strong>
      </p>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} × {item.quantity} = $
                {item.price * item.quantity}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h3>
            Total Price: ${totalPrice}
          </h3>

          <button onClick={handleCheckout}>
            Checkout
          </button>

          {" "}

          <button onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default CartSummary;