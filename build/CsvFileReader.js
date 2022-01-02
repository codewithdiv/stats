"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const dateConverter_1 = require("./utils/dateConverter");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: "utf8" })
            .split("\n")
            .map((match) => {
            /** this will split a single string row into an array of strings */
            return match.split(",");
        })
            .map((row) => {
            /** does the convertion of each value in the array of a string*/
            return [
                (0, dateConverter_1.dateConverter)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
