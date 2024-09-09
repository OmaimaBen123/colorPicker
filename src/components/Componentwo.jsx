
import { useState } from "react";

function Componentwo() {
    //input text
    const [name, setName] = useState("FOFA");

    const [comment, setComment] = useState("");
     
    const [payment, setPayment] = useState("joro");

    const [shipping, setShipping] = useState(" faboor");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleComment(event) {
        setComment(event.target.value);
    }

    function handlePayment(event) {
        setPayment(event.target.value)
    }
    function handleShipping(event) {
        setShipping(event.target.value);
    }
    return (
        <div>
        
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name:{name}</p>
            <textarea name="" id="" value={comment} onChange={handleComment}></textarea>
            <p>Comment: {comment}</p>
            
            <select value={payment} onChange={handlePayment}>
                <option value=""> select an option </option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">master</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>payment: {payment}</p>

            <label>
  <input
    type="radio"
    value="pick up"
    checked={shipping === "pick up"}
    onChange={handleShipping}  // Corrected "onChange"
  />
  Pick Up
</label>
<br />

<label>
  <input
    type="radio"
    value="delivery"
    checked={shipping === "delivery"}
    onChange={handleShipping}  // Corrected "onChange"
  />
  Delivery
</label>

<p>shipping: {shipping}</p>


        </div>
    )
}
export default Componentwo;