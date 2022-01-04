import { CsvFileReader } from "./class/CsvFileReader";
import { MatchResult } from "./utils/MatchResultEnum";
import { MatchReader } from "./class/MatchReader";

// const reader = new MatchReader("football.csv");
// reader.read();
const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manCity = 0;
for (let match of matchReader.matches) {
  if (match[1] === "Man City" && match[5] === MatchResult.homeWin) {
    manCity++;
  } else if (match[2] === "Man City" && match[5] === MatchResult.awayWin) {
    manCity++;
  }
}

console.log(`Man City won ${manCity} games`);
