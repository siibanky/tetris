import React from "react";
import "./StartGame.css"

interface StartGameProps{
   onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const StartGame: React.FC<StartGameProps> = ({ onClick }) => {
   return (
       <button id="startButton" onClick={(event) => onClick(event)}> Start Game</button>
   )
}



export default StartGame;