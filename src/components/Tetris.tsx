import Display from "./Display";
import React from "react";
import Stage from "./Stage";
import StartGame from "./StartGame";


const Tetris = () => {
    return (
        <div>
            < Stage/>
            <div className="sideLabels">
                <Display scoreLabelText="Score" nextLabelText="Row" levelLabelText="Level"/>
            </div>
            < StartGame/>
        </div>
    );
};


export default Tetris;