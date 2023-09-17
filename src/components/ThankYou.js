export const ThankYou = (props) => {
    return(
        
            <div className="thank-you">
          <img src="./images/icon-complete.svg" alt="" />
          <p className="thank-you-text">THANK YOU!</p>
          <p className="thank-you-para">We’ve added your card details</p>
          <button onClick={props.click} type="button" name="button">Continue</button>
        </div>
        
    )
}