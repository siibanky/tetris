import _data from "../tetrominoes.json"
import {Tetromino} from "./tetromino";

export const data: Record<string, Tetromino> = _data;
console.log(data);