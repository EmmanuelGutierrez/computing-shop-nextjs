import React from "react";
import { Order } from "../../components/Order";
import "./Orders.scss";

const Orders = (): JSX.Element => {
  return (
    <div>
      <div className="Orders">
        <div className="Orders-container">
          <h1 className="title">My orders</h1>
          <div className="Orders-content">
            <Order />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Orders };
