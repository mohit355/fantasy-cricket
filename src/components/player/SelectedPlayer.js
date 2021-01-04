import React from "react";
import "./selectedPlayer.css";
import Player from "../playerList/Player";

function SelectedPlayer(props) {
  return (
    <div className="selectedPlayers">
      <h1>Total Credit used :{props.creditUsed}</h1>
      <h3>Player selected :{props.totalPlayers}</h3>

      {props.selectedPlayer.map((value, index) => (
        <Player
          key={index}
          id={index}
          name={value.name}
          cost={value.costs}
          onRemove={props.onRemove}
          isSelected={true}
        />
      ))}
    </div>
  );
}

export default SelectedPlayer;
