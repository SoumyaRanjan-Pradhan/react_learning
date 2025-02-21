import React from "react";

const Basket = (props) => {
  return (
    <div className="basket">
      <h5>{props.basket}</h5>
      <h3>{props.apple_count} Apples</h3>
    </div>
  );
};

export {Basket};
