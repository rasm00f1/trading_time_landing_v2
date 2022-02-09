import { useState } from "react";

export default function ShopCounter(props) {
  const [amount, setAmount] = useState(0);
  //Increases amount
  function incClick() {
    setAmount((prevAmount) => prevAmount + 1);
  }
  //Decreases amount
  function decClick() {
    if (amount > 0) {
      setAmount((prevAmount) => prevAmount - 1);
    } else return;
  }
  return (
    <div style={{ backgroundColor: "#fed218", padding: "1rem" }} className="side_by_side">
      <button
        className="webshop_button"
        onClick={() => {
          setAmount(0);
          props.setCartAmount(amount);
          if (amount === 0) {
            props.setCartAmount("");
          }
        }}
      >
        Add to Cart
      </button>
      <button className="webshop_button" onClick={decClick}>
        -
      </button>
      <p style={{ fontSize: "2rem", color: "white", textShadow: "2px 2px 0px rgb(150 20 150)" }}>{amount}</p>
      <button className="webshop_button" onClick={incClick}>
        +
      </button>
    </div>
  );
}
