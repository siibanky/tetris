import React from "react";
import './Display.css'

type DisplayProps = {
    scoreLabelText: string;
    nextLabelText: string;
    levelLabelText: string;
}

const Display: React.FC<DisplayProps> = ({scoreLabelText, nextLabelText, levelLabelText}) => {
    return (
        <div className="sideLabels">
            <div id="score">{scoreLabelText}</div>
            <div id="next">{nextLabelText}</div>
           <div id="level">{levelLabelText}</div>
        </div>
    )
};

export default Display;