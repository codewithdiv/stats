import fs from "fs";

const matches = fs
  .readFileSync("football.csv", { encoding: "utf8" })
  .split("\n")
  .map((match: string): string[] => {
    return match.split(",");
  });

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man City" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man City" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`Man City won ${manUnitedWins} games`);
