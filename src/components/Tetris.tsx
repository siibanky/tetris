import Display from "./Display";
import React from "react";

const Tetris = () => {
    return (
        <div>
            < Stage/>
            <aside>
                <div>
                    <Display scoreLabelText="Score" rowLabelText="Row" levelLabelText="Level"/>
                </div>
                < StartButton/>
            </aside>
        </div>
    );
};


export default Tetris;