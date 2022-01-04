"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResultEnum_1 = require("./utils/MatchResultEnum");
const MatchReader_1 = require("./class/MatchReader");
const reader = new MatchReader_1.MatchReader("football.csv");
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
