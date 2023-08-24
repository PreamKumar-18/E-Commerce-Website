import React, { useState } from "react";
import Offer from "./Offer";

function Offers({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = Offer.filter((product) =>
    product.offer.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container">
      <div className="text-center">
        <h1>Offer Zone</h1>
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="image_box">
                <img src={product.img} alt="" className="card-img-top" />
              </div>
              <div className="card-body">
                <p className="card-text">{product.title}</p>
                <p className="card-text">{product.colour}</p>
                <p className="card-text">
                  Price - ₹{product.price} - {product.offer}off
                </p>
                <button
                  onClick={() => {
                    console.log(product);
                    addToCart(product);
                  }}
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
