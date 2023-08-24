import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

import NewArrivals from "./NewArrivals";
import Brands from "./Brands";
import Navbar from "./Navbar";
import PartyWears from "./PartyWears";
import Footer from "./Footer";
import Offers from "./Offers";

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Cart:", cart);
    setTotalPrice(totalPrice + product.price);
    console.log("Total Price:", totalPrice);

    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      setTotalPrice(totalPrice + product.price);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setTotalPrice(totalPrice + product.price);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setTotalPrice(totalPrice - product.price * product.quantity); 
  };
  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    setTotalPrice(totalPrice + product.price);
  };

  const decreaseQuantity = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem && existingItem.quantity > 1) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
      setTotalPrice(totalPrice - product.price);
    }
  };
  return (
    <div className="App">
      <Navbar setCartVisible={setCartVisible} cartVisible={cartVisible} />
      {cartVisible && (
        <Cart
          cart={cart}
          totalPrice={totalPrice}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          setCartVisible={setCartVisible}
        />
      )}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/brand" element={<Brands />} />

            <Route
              path="/new-arrivals"
              element={<NewArrivals addToCart={addToCart} />}
            />
            <Route
              path="/party"
              element={<PartyWears addToCart={addToCart} />}
            />
            <Route path="/offer" element={<Offers addToCart={addToCart} />} />
          </Routes>
        </div>
        <br></br>
        <br></br>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
