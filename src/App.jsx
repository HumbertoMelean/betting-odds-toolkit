import { useState, useEffect } from "react";

function App() {
  const [americanOdds, setAmericanOdds] = useState("");
  const [decimalOdds, setDecimalOdds] = useState("");

  function convertAmericanToDecimal(americanOdds) {
    if (americanOdds >= 100) {
      setDecimalOdds(americanOdds / 100 + 1);
    } else if (americanOdds <= -100) {
      //code
      setDecimalOdds(100 / Math.abs(americanOdds) + 1);
    } else {
      setDecimalOdds("");
    }
  }

  function convertDecimalToAmerican(decimalOdds) {
    if (decimalOdds >= 2) {
      setAmericanOdds((decimalOdds - 1) * 100);
    } else if (decimalOdds < 2) {
      setAmericanOdds(-100(decimalOdds - 1));
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
          onChange={convertDecimalToAmerican}
        />
      </div>
    </div>
  );
}

export default App;
