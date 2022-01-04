import fs from "fs";
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf8" })
      .split("\n")
      .map((match: string): string[] => {
        /** this will split a single string row into an array of strings */
        return match.split(",");
      })
      .map(this.mapRow);
  }
}
