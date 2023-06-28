import React from 'react';

function Result({ result }) {
    console.log(result)
  return (
    <div>
      <h2>Result</h2>
      <p>Hit Probability: {result.hitProbability.toFixed(2)}</p>
      <p>Wound Probability: {result.woundProbability.toFixed(2)}</p>
      <p>Save Probability: {result.saveProbability.toFixed(2)}</p>
      <p>Damage per Attack: {result.damagePerAttack.toFixed(2)}</p>
        <p>Attacks Needed Per Model: {result.attacksNeededPerModel.toFixed(2)}</p>
      <p>Attacks Needed: {Math.ceil(result.totalAttacksNeeded)}</p>
      <p>It takes approximately {Math.ceil(result.roundsNeeded)} rounds to eliminate the unit.</p>
    </div>
  );
}

export default Result;
