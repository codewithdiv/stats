import { Analyzer } from "../class/Summary";
import { MatchData } from "../matchData";
import { MatchResult } from "../utils/MatchResultEnum";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.homeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.awayWin
      ) {
        wins++;
      }
    }

    return `${this.teamName} won ${wins} games`;
  }
}
