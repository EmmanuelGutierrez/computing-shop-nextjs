import React from "react";
import "./Order.scss";

import arrow from "../../assets/icons/flechita.svg";

const Order = (): JSX.Element => {
  return (
    <div className="Order">
      <p>
        <span>19/02/22</span>
        <span>6 articles</span>
      </p>
      <p>$37000,00</p>
      <img src={arrow} alt="flechita" />
    </div>
  );
};

export { Order };
