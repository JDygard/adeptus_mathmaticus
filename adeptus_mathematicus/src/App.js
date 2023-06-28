import React, { useState } from "react";
import UnitInput from "./components/UnitInput";
import Result from "./components/Result";
import { calculateRounds } from "./helpers/calculateRounds";
import "./App.css";

function App() {
  
  const [attacker, setAttacker] = useState({
    attacks: 1,
    weaponSkill: 4,
    strength: 4,
    armourPenetration: 0,
    damage: 1,
    abilities: []
  });
  const [defender, setDefender] = useState({
    toughness: 4,
    wounds: 2,
    save: 6,
    unitSize: 1,
  });
  const [result, setResult] = useState(null);

  const handleCalculateClick = () => {
    const calculationResults = calculateRounds(attacker, defender);
    setResult(calculationResults);
  };

  useState(() => {
    setResult(null);
    console.log("Resetting results")
  }, [attacker, defender]);

  return (
    <div className="App">
      <h1>Warhammer 40k Combat Calculator</h1>
      <div className="units-form">
        <UnitInput title="Attacker" unitStats={attacker} setUnitStats={setAttacker} type={"attacker"} />
        <UnitInput title="Defender" unitStats={defender} setUnitStats={setDefender} type={"defender"} />
        <button  onClick={handleCalculateClick} style={{ marginRight: "10%", flexWrap: "wrap" }}>Calculate</button>
      </div>
      {result && <Result result={result} />}
    </div>
  );
}

export default App;
