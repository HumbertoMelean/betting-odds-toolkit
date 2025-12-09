import { useState, useEffect } from "react";

function App() {
  const [americanOdds, setAmericanOdds] = useState("");
  const [decimalOdds, setDecimalOdds] = useState("");

  function convertAmericanToDecimal(americanOdds) {
    if (americanOdds >= 100) {
      console.log(americanOdds);
    } else if (americanOdds <= -100) {
      //code
      console.log(americanOdds);
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
            console.log("user", inputValue);
          }}
        />
        <p>:{americanOdds}</p>
      </div>
      <div>
        <p>Deciaml Odds</p>
        <input placeholder="Decimal Odds" value={setDecimalOdds} />
      </div>
    </div>
  );
}

export default App;
