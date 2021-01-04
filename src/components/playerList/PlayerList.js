import React, { useState } from "react";
import "./playerList.css";

import Player from "./Player";

function PlayerList(props) {
  const [pList, setPList] = useState(props.lists);

  return (
    <div className="playerLists">
      <h1> Total Credit left : {100 - props.creditUsed} </h1>
      {pList.map((value, index) => (
        <Player
          key={index}
          id={index}
          name={value.name}
          cost={value.costs}
          onAdd={props.onAdd}
          isSelected={false}
          isDisable={props.isDisable}
        />
      ))}
    </div>
  );
}

export default PlayerList;
