import { useState } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "../data/consts";
import Attribute from "./Attribute";
import ClassDetails from "./ClassDetails";
import Skill from "./Skill";

const CharacterSheet = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const [attributes, setAttributes] = useState(
    Object.fromEntries(ATTRIBUTE_LIST.map((attribute) => [attribute, 10]))
  );


  // intelligence attribute ability modifier
  const intModifier = Math.floor((attributes.Intelligence - 10) / 2);

  // state to keep track of the skill points
  const [skillPoints, setSkillPoints] = useState(
    10 + 4 * intModifier
  );

  // handler function to update attribues state  
  const updateAttributeValueHandler = (attribute, value) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: value,
    }));
  };

  // handler function to update the selected class state
  const displayClassDetailsHandler = (characterClass) => {
    setSelectedClass(characterClass);
  };

  // handler function to update the skillpoints
  const skillPointHandler = (value) => {
    setSkillPoints(skillPoints + value);
  };

  return (
    <>
      {Object.keys(CLASS_LIST).map((characterClass) => {
        // check if attribues values exceeds the minimum requirements of the class
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

      <div>
        {Object.keys(SKILL_LIST).map((skillName) => {
          // calculate the ability modifier of all attributes
          const abilityModifier = Math.floor((attributes[SKILL_LIST[skillName].attributeModifier] - 10)/2);
          const skillPointsSpent = 0;

          return (
            <Skill
              key={skillName}
              skillName={SKILL_LIST[skillName].name}
              abilityModifier={abilityModifier}
              skillPointHandler={skillPointHandler}
              // disable all buttons if skillpointSpent exceeds or equals to skillpoints
              disabled={skillPointsSpent >= skillPoints}
            />
          );
        })}
      </div>
    </>
  );
};

export default CharacterSheet;
