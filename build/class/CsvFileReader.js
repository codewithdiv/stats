"use strict";
/** --------------------- First refactor ----------------------*/
// import fs from "fs";
// export abstract class CsvFileReader<T> {
//   data: T[] = [];
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
//   constructor(public filename: string) {}
//   abstract mapRow(row: string[]): T;
//   read(): void {
//     this.data = fs
//       .readFileSync(this.filename, { encoding: "utf8" })
//       .split("\n")
//       .map((match: string): string[] => {
//         /** this will split a single string row into an array of strings */
//         return match.split(",");
//       })
//       .map(this.mapRow);
//   }
// }
/** --------------------- End of  first refactor --------------------*/
/** --------------------- Second refactor --------------------*/
const fs_1 = __importDefault(require("fs"));
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
        });
    }
}
exports.CsvFileReader = CsvFileReader;
/** --------------------- End of Second refactor --------------------*/
