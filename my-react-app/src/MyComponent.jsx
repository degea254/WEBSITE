import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("cash");
  const [shipping, setShipping] = useState("delivery");

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange}></input>
      <p>Hello, {name}!</p>

      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
      ></input>
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="enter delivery comments..."
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select Payment Method</option>
        <option value="cash">Cash</option>
        <option value="card">Card</option>
        <option value="paypal">PayPal</option>
      </select>
      <p>Payment Method: {payment}</p>

      <label htmlFor="pickup">pick up</label>
      <input
        type="radio"
        id="pickup"
        name="shipping"
        value="pickup"
        checked={shipping === "pickup"}
        onChange={handleShippingChange}
      />

      <label htmlFor="delivery">delivery</label>
      <input
        type="radio"
        id="delivery"
        name="shipping"
        value="delivery"
        checked={shipping === "delivery"}
        onChange={handleShippingChange}
      />
      <p>Shipping Method: {shipping}</p>
    </div>
  );
}

export default MyComponent;
