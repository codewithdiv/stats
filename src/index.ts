import { CsvFileReader } from "./class/CsvFileReader";
import { MatchResult } from "./utils/MatchResultEnum";

const reader = new CsvFileReader("football.csv");
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
