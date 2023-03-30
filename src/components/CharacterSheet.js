import { useState } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST } from "../data/consts";
import Attribute from "./Attribute";
import ClassDetails from "./ClassDetails";

const CharacterSheet = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const [attributes, setAttributes] = useState(
    Object.fromEntries(ATTRIBUTE_LIST.map((attribute) => [attribute, 10]))
  );

  const updateAttributeValueHandler = (attribute, value) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: value,
    }));
  };

  const displayClassDetailsHandler = (characterClass) => {
    setSelectedClass(characterClass);
  };

  return (
    <>
      {Object.keys(CLASS_LIST).map((characterClass) => {
        const meetsRequirement = Object.entries(
          CLASS_LIST[characterClass]
        ).every(([key, value]) => attributes[key] >= value);
        return (
          <button
            className={meetsRequirement ? "enabledClass" : ""}
            key={characterClass}
            onClick={() => displayClassDetailsHandler(characterClass)}
          >
            {characterClass}
          </button>
        );
      })}

      {selectedClass && (
        <ClassDetails characterClass={CLASS_LIST[selectedClass]} />
      )}

      {Object.keys(attributes).map((element) => {
        return (
          <Attribute
            key={element}
            attributeName={element}
            value={attributes[element]}
            onUpdateValue={(value) =>
              updateAttributeValueHandler(element, value)
            }
          />
        );
      })}
    </>
  );
};

export default CharacterSheet;
