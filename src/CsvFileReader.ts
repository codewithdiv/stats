import fs from "fs";
import { dateConverter } from "./utils/dateConverter";
import { MatchResult } from "./utils/MatchResultEnum";

type MatchData = [Date, String, String, Number, Number, MatchResult, String];
export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf8" })
      .split("\n")
      .map((match: string): string[] => {
        /** this will split a single string row into an array of strings */
        return match.split(",");
      })
      .map((row: string[]): MatchData => {
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
      });
  }
}
