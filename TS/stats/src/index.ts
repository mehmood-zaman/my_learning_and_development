import fs from "fs";
import { CSVFileReader } from "./CSVFileReader";
const reader = new CSVFileReader("football.csv");
reader.read();
let manUtdWins = 0;
const homeWin = "H";
const awayWin = "A";

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
console.log("Hii");

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}

console.log(`Man united won ${manUtdWins} games`);
