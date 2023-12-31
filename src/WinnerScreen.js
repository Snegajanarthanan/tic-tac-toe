import React from "react";

const WinnerScreen = ({ restartGame, playerWon }) => {
  return (
    <div className="winner">
      <h2 className="congo">
        {playerWon === "No One" ? "oops! Its a draw" : "Congratulations!"}
      </h2>
      <h3 className="player">{playerWon}won the Game.</h3>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default WinnerScreen;
