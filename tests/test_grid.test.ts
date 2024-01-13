import Grid from "../src/models/Grid";


let grid: Grid;
describe("Grid", () => {
    beforeEach(() => {
        grid = new Grid(10, 20);
    })
    describe("constructor", () => {
        it("creates a grid with the expected height", () => {
            expect(12).toBe(12);
            expect(grid.cells.length).toBe(20);
        })
        it("creates a grid with the expected width", () => {

        })
    })
})