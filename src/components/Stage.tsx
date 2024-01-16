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
                row.push(<div key={c} className="cell"> {stageGrid.cells[r][c].r}, {stageGrid.cells[r][c].c} </div>);
            }
        }
        ofiGrid.push(<div key={r}> {row} </div>);
    }
    return (
        <div>
            {ofiGrid}
        </div>
    )
}

export default Stage;
