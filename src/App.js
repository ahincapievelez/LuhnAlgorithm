import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [input, setInput] = useState("");
  let [message, setMessage] = useState("");

  useEffect(validCard, [input]);

  function handleChange(evt) {
    setInput(evt.target.value);
  }

  function validCard() {
    let cardNumber = input;
    let newCreditCard = [];
    let creditCard = reverseCard(cardNumber);

    for (let i = 1; i <= creditCard.length; i++) {
      if (i % 2 === 0) {
        let number = parseInt(creditCard[i - 1]) * 2;
        number = number.toString();
        if (number.length > 1) {
          newCreditCard[i - 1] = parseInt(number[0]) + parseInt(number[1]);
        } else {
          newCreditCard[i - 1] = parseInt(number);
        }
      } else {
        let number = parseInt(creditCard[i - 1]);
        newCreditCard[i - 1] = number;
      }
    }

    console.log('New Credit Card = ' + newCreditCard);
    let sum = 0;
    let number = newCreditCard.map((i) => (sum += i));
    console.log(number);

    if(cardNumber.length === 0){
      setMessage("Please enter your credit card number");
    } else if (sum % 10 === 0) {
      setMessage("Card Valid");
    } else {
      setMessage("Card Not Valid");
    }
  }

  function reverseCard(cardNumber) {
    let splitCard = cardNumber.split("");
    console.log('Credit Card = ' + splitCard)

    let reverseCardNumber = splitCard.reverse();
    console.log('Reverse Credit Card = ' + reverseCardNumber)
    return reverseCardNumber;
  }

  return (
    <div className="App">
      <h1>The Luhn Algorithm</h1>
      <p>{message}</p>
      <input value={input} onChange={handleChange} />
    </div>
  );
}

export default App;
