import { useState } from "react";

const Attribute = (props) => {
  const { attributeName } = props;
  const [value, setValue] = useState(10);

  const abilityModifier = Math.floor((value - 10)/2)

  const incrementHandler = () => setValue(value + 1);

  const decrementHandler = () => setValue(value - 1);

  return (
    <div>
      {attributeName}
      <div>
      <button onClick={incrementHandler}>+</button>
        Value: {value} 
        <button onClick={decrementHandler}>-</button>Ability Modifier: {abilityModifier}
      </div>
    </div>
  );
};

export default Attribute;
