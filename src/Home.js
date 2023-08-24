import React from "react";
import Banner from "./Assets/Banner1.jpg";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={Banner} alt="Banner" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
