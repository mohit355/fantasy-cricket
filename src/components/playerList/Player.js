import React from "react";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

function Player(value) {
  return (
    <div className="playerLists-one">
      <h3 className="playerName"> {value.name} </h3>
      <p className="playerCost"> {value.cost} </p>

      {value.isSelected ? (
        <button
          className="symbol"
          href="##"
          //   disabled="true"
          onClick={() => value.onRemove(value.id)}
        >
          <RemoveIcon />
        </button>
      ) : (
        <button
          className="symbol"
          href="##"
          onClick={() => value.onAdd(value.id)}
          disabled={value.isDisable}
        >
          <AddIcon />
        </button>
      )}
    </div>
  );
}

export default Player;
