import "./ClassDetails.css";

const ClassDetails = (props) => {
  const { characterClass } = props;
  return (
    <div>
      <ul>
        {Object.entries(characterClass).map(([attribute, value]) => (
          <li key={attribute}>
            {attribute}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassDetails;
