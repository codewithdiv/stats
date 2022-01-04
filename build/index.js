"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./class/CsvFileReader");
const MatchResultEnum_1 = require("./utils/MatchResultEnum");
const MatchReader_1 = require("./class/MatchReader");
// const reader = new MatchReader("football.csv");
// reader.read();
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manCity = 0;
for (let match of matchReader.matches) {
    if (match[1] === "Man City" && match[5] === MatchResultEnum_1.MatchResult.homeWin) {
        manCity++;
    }
    else if (match[2] === "Man City" && match[5] === MatchResultEnum_1.MatchResult.awayWin) {
        manCity++;
    }
}
console.log(`Man City won ${manCity} games`);
