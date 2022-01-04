"use strict";
/** -------------------First refactor ---------------------- */
// import { CsvFileReader } from "./CsvFileReader";
// import { dateConverter } from "../utils/dateConverter";
// import { MatchResult } from "../utils/MatchResultEnum";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
// type MatchData = [Date, String, String, Number, Number, MatchResult, String];
// export class MatchReader extends CsvFileReader<MatchData> {
//   mapRow(row: string[]): MatchData {
//     /** does the convertion of each value in the array of a string*/
//     return [
//       dateConverter(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as MatchResult,
//       row[6],
//     ];
//   }
// }
/** ------------------ End of  first refactor ---------------------- */
/** ---------------- Second refactor ---------------------- */
const dateConverter_1 = require("../utils/dateConverter");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
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
exports.MatchReader = MatchReader;
/** ------------------ End of second refactor ----------------------*/
