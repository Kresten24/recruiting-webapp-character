import { useState } from "react";

const Attribute = (props) => {
  const { attributeName } = props;
  const [value, setValue] = useState(10);

  const incrementHandler = () => setValue(value + 1);

  const decrementHandler = () => setValue(value - 1);

  return (
    <div>
      {attributeName}
      <div>
        Value:
        <button onClick={incrementHandler}>+</button>
        {value}
        <button onClick={decrementHandler}>-</button>
      </div>
    </div>
  );
};

export default Attribute;
