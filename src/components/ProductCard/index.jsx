import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCart({ title, priceNew, priceOld, src }) {
  const currencyFormat = (price) => {
    return "$" + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  return (
    <div className="col-sm-4">
      <div className="card mb-2">
        <img className="card-img-top" src={src} alt="" />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <div className="card-rating text-warning">
            <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
          </div>
          <p className="card-price">
            <span className="card-price__new">
              {currencyFormat(parseFloat(priceNew))}
            </span>
            <span className="card-price__old">
              {currencyFormat(parseFloat(priceOld))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
