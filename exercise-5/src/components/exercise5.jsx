// Shopping Cart Project

import { useState } from "react";

const ShoppingCart = () => {
    const [inputProducts, setInputProducts] = useState(""); //inputproduct-ka userka qorayo ayuu hayaa
    const [inputPrice, setInputPrice] = useState(""); //inputprice-ka-ka userka qorayo ayuu hayaa
    const [products, setProducts] = useState([]); // liis of products ayuu soo celinayaa

    const addToCart = ()=> {
        const newProducts = {

            id: crypto.randomUUID(),
            name:inputProducts,
            price: parseFloat(inputPrice),
            quantity:1
        }

        setProducts([...products, newProducts]);
        setInputProducts("");
        setInputPrice("");

        //qaabka ay wax u dhacayaan marka newProduct object uu helo
        //
                // products = [
                //   {
                //     name: "Keyboard",
                //     price: 40,
                //     quantity: 1
                //   },
                //   {
                //     name: "Mouse",
                //     price: 20,
                //     quantity: 1
                //   }
                // ]

    }

    //Inrease Product Price
        const increaseQuantity = (id) => {
        setProducts(
            products.map(product => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity + 1

                    }
                }

                return product;
            })
        )
    }

    //Decrease Product Price
        const decreaseQuantity = (id) => {
            setProducts( products.map(product => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1

                    }
                }

                return product;
            })
        )
    }

    //Removing Products
        const removeProduct = (id) => {
            setProducts(
                products.filter(product => product.id !== id)
        )
    }

    //Total Products
        const totalPrice = products.reduce((total, product) => 
            total + (product.price * product.quantity),0 );

  return (
    <>
      <h1>Simple Shopping Cart</h1>
      <h3>Add a Product</h3>

        <input 
            type="text" 
            placeholder="Product Name" 
            value={inputProducts}
            onChange={(e)=> setInputProducts(e.target.value)}
        />
        <input 
            type="text" 
            placeholder="Price" 
            value={inputPrice}
            onChange={(e)=> setInputPrice(e.target.value)}
        />

      <button onClick={addToCart}>Add to Cart</button>

      {products.length === 0 && (
        <p>The Cart is Empty</p>
    )}

      <h5>Products in Cart</h5>

      <ul>

            {
                products.map(product => (
                    <>
                    {/* sabbata aan gudaha <li> aan "key" ugu isticmaaleyno, - React wuxuu leeyahay: "Sideen ku kala garanayaa Keyboard-ka iyo Mouse-ka?" key ayaa u sheegaya. */}
                        <li key={product.id}> 
                            <b>{product.name}</b> - ${product.price.toFixed(2)} <br />
                            Quantity: <button onClick={() => decreaseQuantity(product.id)}>-</button> {product.quantity} 
                            <button onClick={() => increaseQuantity(product.id)}>+</button>    
                        </li>
                        <button onClick={() => removeProduct(product.id)}>Remove</button>
                    </>
                    
                ))
            }

      </ul>

      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
  
    </>
  );
};

export default ShoppingCart;

