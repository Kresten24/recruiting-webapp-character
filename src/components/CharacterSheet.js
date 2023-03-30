import { useState } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST } from "../data/consts";
import Attribue from "./Attribute";
import ClassDetails from "./ClassDetails";

const CharacterSheet = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const displayClassDetailsHandler = (characterClass) => {
    setSelectedClass(characterClass);
  };

  return (
    <>
      {Object.keys(CLASS_LIST).map((characterClass) => {

        return (
          <button
          // className={meetsRequirements? 'enabledClass': ''}
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

      {ATTRIBUTE_LIST.map((element) => {
        return <Attribue attributeName={element} />;
      })}
    </>
  );
};

export default CharacterSheet;
