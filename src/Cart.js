import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./App";
export default function Cart() {
  const { cart, products } = useContext(AppContext);
  const [orderVal, setOrderVal] = useState(0);
  useEffect(() => {
    setOrderVal(
      products.reduce((total, value) => {
        return total + (value.price * cart[value.id]);
      },0)
    );
  }, []);
  return (
    <div>
      {products.map(
        (value, index) =>
          cart[value.id] && (
            <div key={index} className="ab">
              {value.name}-{value.price}-<button>-</button>{cart[value.id]}<button>+</button>-
              {value.price * cart[value.id]}
            </div>
          )
      )}
      <h3>Order Value:{orderVal}</h3>
    </div>
  );
}