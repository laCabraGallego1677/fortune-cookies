import React from "react";
import getRandomFromArray from "../utils/getRandomFromArray";
import phrases from "../utils/phrases.json";
import arrImages from "../utils/arrimages.json";
import "./styles/btnPhrase.css";

const BtnPhrase = ({ setPhraseRandom, setImageSelected }) => {
  
  const handleClick = () => {
    const phrase = getRandomFromArray(phrases);
    setPhraseRandom(phrase);

    const background = getRandomFromArray(arrImages);
    setImageSelected(background);
  };

  return (
    <div>
      <button className="card__btn" onClick={handleClick}>Probar suerte</button>
    </div>
  );
};

export default BtnPhrase;
