import Cell from "./Cell";

class Grid {
    private cells: Cell[][];

    constructor(width: number, height: number) {
        // creates new grid, specified width & height, each cell in grid is an instance of the Cell class.
        //creating new cell instance for each cell.
        this.cells = Array(height).fill(null).map(() => {
            return Array(width).fill(null).map((_, w) => new Cell(w, _));
        });
    };
}

export default Grid;