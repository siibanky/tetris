import Cell from "./Cell";

class Grid {
    cells: Cell[][];

    constructor(width: number, height: number) {
        this.cells = [];
        for (let r = 0; r < height; r++) {
            let row = [];
            for (let c = 0; c < width; c++) {
                const cell = new Cell(r, c);
                row.push(cell);
            }
            this.cells.push(row);
        }
    }
}

export default Grid;