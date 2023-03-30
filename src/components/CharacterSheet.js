import { useState } from "react";
import { ATTRIBUTE_LIST } from "../consts";
import Attribue from "./Attribute";

const CharacterSheet = () => {
    
  return (
    <>
      {ATTRIBUTE_LIST.map((element) => {
        return <Attribue attributeName={element} />;
      })}
    </>
  );
};

export default CharacterSheet;
