import { useState, useEffect } from "react";

function App() {
  const [americanOdds, setAmericanOdds] = useState("");
  const [decimalOdds, setDecimalOdds] = useState("");

  //conversion functions
  function convertAmericanToDecimal(americanOdds) {
    if (americanOdds >= 100) {
      //converts american odds to decimal, then rounds it to 2 decimal places,
      // then formats the number to remove trailing zero's
      setDecimalOdds(Number((americanOdds / 100 + 1).toFixed(2)));
    } else if (americanOdds <= -100) {
      //code
      setDecimalOdds(Number((100 / Math.abs(americanOdds) + 1).toFixed(2)));
    } else {
      setDecimalOdds("");
    }
  }

  function convertDecimalToAmerican(decimalOdds) {
    if (decimalOdds >= 2) {
      setAmericanOdds(((decimalOdds - 1) * 100).toFixed(2));
    } else if (decimalOdds > 1) {
      setAmericanOdds((-100 * (decimalOdds - 1)).toFixed(2));
    } else {
      setAmericanOdds("");
    }
  }

  return (
    <div>
      <div>
        <p>American Odds</p>
        <input
          placeholder="American Odds"
          type="number"
          value={americanOdds}
          onChange={(e) => {
            const inputValue = e.target.value;
            setAmericanOdds(inputValue);
            convertAmericanToDecimal(inputValue);
          }}
        />
        <p>American Odds input: {americanOdds}</p>
      </div>
      <div>
        <p>Deciaml Odds</p>
        <input
          placeholder="Decimal Odds"
          type="number"
          value={decimalOdds}
          onChange={(e) => {
            const inputValue = e.target.value;
            setDecimalOdds(inputValue);
            convertDecimalToAmerican(inputValue);
          }}
        />
      </div>
      <button>Save Bet</button>
    </div>
  );
}

export default App;
