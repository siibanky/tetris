import Display from "./Display";
import React from "react";
import Stage from "./Stage";
import StartGame from "./StartGame";
import "./Tetris.css";


const Tetris = () => {
    return (
        <div className="gameBoard">
            < Stage/>
            <div className="sideLabels">
                <Display scoreLabelText="Score" nextLabelText="Row" levelLabelText="Level"/>
            </div>
        </div>

    );
};


export default Tetris;