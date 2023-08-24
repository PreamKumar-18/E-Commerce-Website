import React from "react";
import Allen from "./Assets/Allen Solly.png";
import Puma from "./Assets/Puma.png";
import Addidas from "./Assets/Addidas.png";

function Brands() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>
          <b>Brands</b>
        </h1>
      </div>
      <div className="row text-center">
        {" "}
        <div className="col-sm-4 col-12 mb-3">
          <img src={Allen} alt="Allen" className="img-fluid mx-auto" />{" "}
        </div>
        <div className="col-sm-4 col-12 mb-3">
          <img src={Addidas} alt="Addidas" className="img-fluid mx-auto" />
        </div>
        <div className="col-sm-4 col-12 mb-3">
          <img src={Puma} alt="Puma" className="img-fluid mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
