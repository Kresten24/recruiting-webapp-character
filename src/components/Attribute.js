import { useState } from "react";

const Attribute = (props) => {
  const { attributeName, value, onUpdateValue } = props;

  const incrementHandler = () => onUpdateValue(value + 1);

  const decrementHandler = () => onUpdateValue(value - 1);

  return (
    <div>
      {attributeName}
      <div>
      <button onClick={incrementHandler}>+</button>
        Value: {value} 
        <button onClick={decrementHandler}>-</button>

      </div>
    </div>
  );
};

export default Attribute;
