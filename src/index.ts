import { CsvFileReader } from "./class/CsvFileReader";
import { MatchResult } from "./utils/MatchResultEnum";
import { MatchReader } from "./class/MatchReader";

const reader = new MatchReader("football.csv");
reader.read();
let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man City" && match[5] === MatchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man City" && match[5] === MatchResult.awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man City won ${manUnitedWins} games`);
