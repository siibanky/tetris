import React from "react";
import Grid from '../models/Grid';
import './Stage.css'

const Stage = () => {
    let stageGrid = new Grid(10, 20);

    let ofiGrid = [];
    for (let r = 0; r < stageGrid.cells.length; r++) {
        let row = [];
        for (let c = 0; c < stageGrid.cells[r].length; c++) {
            if (stageGrid.cells[r] && stageGrid.cells[r][c]) {
                row.push(<div className="cell"></div>);
            }
        }
        ofiGrid.push(<div className="row"> {row} </div>);
    }
    return (
        <div className="gridContainer">
            {ofiGrid}
        </div>
    )
}

export default Stage;
