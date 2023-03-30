import './ClassDetails.css'

const ClassDetails = (props) => {
  const { characterClass } = props;
  return (
    <div>
      <div>
        <ul>
          {Object.entries(characterClass).map(([attribute, value]) => (
            <li key={attribute}>
              {attribute}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassDetails;
