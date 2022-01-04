"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const dateConverter_1 = require("../utils/dateConverter");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
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
    }
}
exports.MatchReader = MatchReader;
