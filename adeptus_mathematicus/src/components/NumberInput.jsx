import React from 'react';

function NumberInput({ value, onIncrement, onDecrement }) {
  return (
    <div className="number-input">
      <button className="number-input__button" onClick={onDecrement}>-</button>
      <span className="number-input__value">{value}</span>
      <button className="number-input__button" onClick={onIncrement}>+</button>
    </div>
  );
}

export default NumberInput;