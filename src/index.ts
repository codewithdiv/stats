import { CsvFileReader } from "./class/CsvFileReader";
import { MatchResult } from "./utils/MatchResultEnum";
import { MatchReader } from "./class/MatchReader";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { Summary } from "./class/Summary";
import { ConsoleReport } from "./reportTarget/ConsoleReport";

// const reader = new MatchReader("football.csv");
// reader.read();
const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man City"), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
