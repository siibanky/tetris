import Grid from "../src/models/Grid";
import Cell from "../src/models/Cell";
import exp = require("constants");



let grid: Grid;
describe("Grid", () => {
    beforeEach(() => {
        grid = new Grid(10, 20);
    })
    describe("constructor", () => {
        it("creates a grid with the expected height", () => {
            expect(grid.cells.length).toBe(20);
        })
        it("creates a grid with the expected width", () => {
            expect(grid.cells[0].length).toBe(10);
        })
        it("has valid cell at row 0 column 2", () => {
            expect(grid.cells[0][2]).toBeInstanceOf(Cell);
            expect(grid.cells[0][2].r).toBe(0);
            expect(grid.cells[0][2].c).toBe(2);
        })
        it("has valid cell at row 0 column 0", () => {
            expect(grid.cells[0][0]).toBeInstanceOf(Cell);
            expect(grid.cells[0][0].r).toBe(0);
            expect(grid.cells[0][0].c).toBe(0);
        })
        it("has valid cell at row 1 column 0", () => {
            expect(grid.cells[1][0]).toBeInstanceOf(Cell);
            expect(grid.cells[1][0].r).toBe(1);
            expect(grid.cells[1][0].c).toBe(0);
        })
        it("has valid cell at row 19 column 9", () => {
            expect(grid.cells[19][9]).toBeInstanceOf(Cell);
            expect(grid.cells[19][9].r).toBe(19);
            expect(grid.cells[19][9].c).toBe(9);
        })
        it("has valid cell at row 19 column 8", () => {
            expect(grid.cells[19][8]).toBeInstanceOf(Cell);
            expect(grid.cells[19][8].r).toBe(19);
            expect(grid.cells[19][8].c).toBe(8);
        })
        it("has valid cell at row 18 column 9", () => {
            expect(grid.cells[18][9]).toBeInstanceOf(Cell);
            expect(grid.cells[18][9].r).toBe(18);
            expect(grid.cells[18][9].c).toBe(9);
        })
    })
})