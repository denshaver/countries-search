import { countriesDB } from "./data/countries";
import { useState } from "react";

function App() {
  // states
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(["DE", "EN"]);

  // variables
  const filteredCountries = countriesDB.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  // render
  return (
    <>
      <div className="container">
        <main>
          <input
            type="text"
            placeholder="Type your country..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="countries-header">
            <div className="toggler-container">
              <div className="toggler"></div>
              <h3>Show selected only</h3>
            </div>
            <button>Clear all</button>
          </div>
          <div className="countries-container">
            {filteredCountries.map((item) => {
              return (
                <div className="country" key={item.code}>
                  <input type="checkbox" name="" id={item.code} />
                  <label htmlFor={item.code}>{item.name}</label>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
