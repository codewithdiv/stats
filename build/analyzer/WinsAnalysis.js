"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResultEnum_1 = require("../utils/MatchResultEnum");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === MatchResultEnum_1.MatchResult.homeWin) {
                wins++;
            }
            else if (match[2] === this.teamName &&
                match[5] === MatchResultEnum_1.MatchResult.awayWin) {
                wins++;
            }
        }
        return `${this.teamName} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
