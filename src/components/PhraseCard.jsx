import React from 'react'
import "./styles/phraseCard.css";

const PhraseCard = ({ phraseRandom }) => {

  const{phrase}=phraseRandom

  return(
    <p className='card__phrase' >{ phrase}</p>

  )
};

export default PhraseCard