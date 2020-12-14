import React, { useState } from 'react';
import picture from '../helpers/images/picture.png';
import playerImages from '../helpers/playerImages';
import typeColors from '../helpers/typeColors';

const PlayerCard = ({playerID, teamDetails}) => {
  return (
    <div className="Card"> 
      <div className="Card_details">
        <h2 className="test">{playerID.first_name} {playerID.last_name}</h2>
        <p>Height: {playerID.height_feet}'{playerID.height_inches}</p>
        <p>Weight: {playerID.weight_pounds}</p>
        <p>Position: {playerID.position}</p>
      </div>
      <div className="Card_img">
        <img className="image" alt="player" 
        src={playerImages[playerID.id] ? playerImages[playerID.id] : picture} width="210px" height="190px"/>
        <div className="team-banner" style={{backgroundColor: typeColors[teamDetails.name]}}>{teamDetails.full_name}</div>
      </div>
    </div>
  )
};

export default PlayerCard;