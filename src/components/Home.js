import React, { useState } from "react";
import Header from "./header/Header";
import PlayerList from "./playerList/PlayerList";
import "./home.css";
import SelectedPlayer from "./player/SelectedPlayer";
import lists from "./list";

function Home() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [creditUsed, setCreditUsed] = useState(0);
  const [totalPlayers, setTotalPlayers] = useState(0);

  const addPlayer = (id) => {
    var credit = creditUsed + lists[id].costs;
    var required = 100 - creditUsed;
    var selectedPlayer = totalPlayers + 1;

    if (creditUsed === 100) {
      alert("0 credit left in the account");
    } else if (credit <= 100 && selectedPlayer <= 11) {
      setCreditUsed((prev) => {
        return prev + lists[id].costs;
      });

      setSelectedPlayer((preV) => {
        return [...preV, lists[id]];
      });

      if (selectedPlayer === 11) {
        setIsDisable(true);
        setTotalPlayers((prev) => {
          return prev + 1;
        });
      } else {
        setTotalPlayers((prev) => {
          return prev + 1;
        });
      }
    } else if (selectedPlayer > 11) {
      alert("you can select only 11 palyers");
    } else {
      alert("Please select a player of credit " + { required } + " or lesser");
    }
  };

  const removePlayer = (id) => {
    setCreditUsed((prev) => {
      return prev - selectedPlayer[id].costs;
    });

    setTotalPlayers((prev) => {
      return prev - 1;
    });

    setSelectedPlayer((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col col-1">
          <PlayerList
            onAdd={addPlayer}
            lists={lists}
            isDisable={isDisable}
            creditUsed={creditUsed}
          />
        </div>
        <div className="col col-2">
          <SelectedPlayer
            selectedPlayer={selectedPlayer}
            creditUsed={creditUsed}
            totalPlayers={totalPlayers}
            onRemove={removePlayer}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
