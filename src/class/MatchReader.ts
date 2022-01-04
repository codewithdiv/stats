import { CsvFileReader } from "./CsvFileReader";
import { dateConverter } from "../utils/dateConverter";
import { MatchResult } from "../utils/MatchResultEnum";

export class MatchReader extends CsvFileReader {
  mapRow(row: string[]): MatchData {
    /** does the convertion of each value in the array of a string*/
    return [
      dateConverter(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
