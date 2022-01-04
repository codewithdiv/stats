"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./class/CsvFileReader");
const MatchResultEnum_1 = require("./utils/MatchResultEnum");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Man City" && match[5] === MatchResultEnum_1.MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man City" && match[5] === MatchResultEnum_1.MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man City won ${manUnitedWins} games`);
