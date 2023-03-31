import { useState } from "react";

const Skill = ({
  skillName,
  abilityModifier,
  skillPointHandler,
  disabled,
}) => {
  const [points, setPoints] = useState(0);

  const incrementSkillPoints = () => {
    if (!disabled) {
      setPoints(points + 1);
      skillPointHandler(-1);
    }
  };

  const decrementSkillPoints = () => {
    if (points > 0) {
      setPoints(points - 1);
      skillPointHandler(1);
    }
  };

  const total = points + abilityModifier;

  return (
    <div>
      {skillName} - points: {points}
      <button onClick={incrementSkillPoints} disabled={disabled}>
        [+]
      </button>
      <button onClick={decrementSkillPoints} disabled={disabled}>
        [-]
      </button>
      modifier: {abilityModifier} total: {total}
    </div>
  );
};

export default Skill;
