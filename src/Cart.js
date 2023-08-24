import React from "react";

const Cart = ({
  cart,
  totalPrice,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="container">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="row">
        {cart.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="image_box">
                <img src={product.img} alt="" className="card-img-top" />
              </div>
              <div className="card-body">
                <p className="card-text">{product.title}</p>
                <p className="card-text">Colour - {product.colour}</p>
                <p className="card-text">Price - ₹{product.price}</p>
                <div>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => increaseQuantity(product)}
                  >
                    +
                  </button>
                  <br></br>
                  Quantity: {product.quantity}
                  <br></br>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => decreaseQuantity(product)}
                  >
                    -
                  </button>
                </div>
                <div>Subtotal: ₹{product.price * product.quantity} </div>
                <button
                  onClick={() => {
                    console.log(product);
                    removeFromCart(product);
                  }}
                  className="btn btn-primary"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="total">
          <span>
            <b>Total Price of your Cart</b>
          </span>{" "}
          <br></br>
          <span>₹ - {totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
