import React, { useState } from "react";
import './card.css';
import { ThankYou } from "./ThankYou";
 const Card = () => {

    const [state,setState] = useState(false);
    const [cardNumber,setCardNumber] = useState("");
    const [name,setName] = useState("");
    const [month,setMonth] = useState("");
    const [year,setYear] = useState("");
    const [cvv,setCvv] = useState("");



    const formSubmit = (e) => {
        e.preventDefault();
        setState(!state);
    }

    const allClear = () => {
        setState(!state);
        setCardNumber("");
        setName("");
        setMonth("");
        setYear("");
        setCvv("")
    }

    return(
        <div className="content">
        <div className="left-content">
          <div className="card-img-num">
            <img className="logo" src="images/card-logo.svg" alt="" />
            <p className="card-num">{cardNumber ? cardNumber : "0000 0000 0000 0000"}</p>
            <div className="card-name-exp">
              <p className="card-name">{name ? name : "JANE APPLESEED"}</p>
              <p className="card-exp">{month ? month : "00"}/{year ? year : "00"}</p>
            </div>
          </div>
          <div className="card-img-cvv">
            <p>{cvv ? cvv : "000"}</p>
          </div>
        </div>

       
        <div className="right-content">
        {state ? <ThankYou click = {allClear}/> :
            
            <form onSubmit={formSubmit} className="form">
            <div className="cardholder-name">
              <label for="cardholder-name">Cardholder Name</label>
              <input type="text" name="cardholder-name"  placeholder="e.g. Jane Appleseed" required
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
  
          <div className="card-num">
            <label for="card-num">Card Number</label>
            <input type="text" name="card-num" placeholder="e.g. 1234 5678 9123 0000" required
                    maxLength={19}
                    value={cardNumber
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}   onChange={(e) => setCardNumber(e.target.value)}/>
          </div>
  
          <div className="card-details">
            <div className="card-exp-date">
              <label for="month-year">Exp. Date (MM/YY)</label>
              <div className="exp-date-month">
                <input type="text" name="month-year" placeholder="MM" min={1} max={12} required value={month} maxLength={2} onChange={(e) => setMonth(e.target.value)}/>
                <input type="text" name="month-year" placeholder="YY" min={1} max={99} required value={year} maxLength={2} onChange={(e) => setYear(e.target.value)}/>
              </div>
            </div>
  
            <div className="card-cvv">
              <label for="cvv">CVC</label>
              <input type="text" name="cvv" placeholder="e.g. 123" min={1} max={999} required value={cvv} maxLength={3} onChange={(e) => setCvv(e.target.value)}/>
            </div>
          </div>
  
          <button className="form-btn" type="submit" name="button">Confirm</button>
  
  
          </form> }
        </div>
      </div>
    );
}

export default Card;