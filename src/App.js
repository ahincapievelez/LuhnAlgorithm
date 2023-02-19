import { useState, useEffect } from 'react';
import './App.css';

function App() {

  let [input, setInput] = useState("");
  let [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Please enter your card number");
  }, []);

  function handleChange(evt){
    setInput(evt.target.value)
  }

  function validCard(cardNumber){
    let newCreditCard = [];
    
    if(cardNumber.length >= 4){
      for (let i = 1; i <= cardNumber.length; i++) {
        if(i % 2 === 0){
          let number = parseInt(cardNumber[i - 1]) * 2;
          number = number.toString();
          if(number.length > 1){
            newCreditCard[i - 1] = parseInt(number[0]) + parseInt(number[1]);
          }else{
            newCreditCard[i - 1] = parseInt(number);
          }
        }else{
          let number = parseInt(cardNumber[i - 1]);
          newCreditCard[i - 1] = number;
        }
      }
      console.log(newCreditCard);
      let sum = 0;
      let number = newCreditCard.map(i => sum += i); 
      console.log(number);
      if(sum % 10 === 0){
        setMessage("Card Valid");
      }else{
        setMessage("Card Not Valid");
      }
    } else {
      console.log('Card Not Valid');
    }
  }

  return (
    <div className="App">
    <p>{message}</p>
    <input value={input} onChange={handleChange} />
    <button onClick={() => validCard(input)}>Submit</button>
    </div>
  );
}

export default App;
