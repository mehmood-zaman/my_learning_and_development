import fs from "fs";

import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];
export abstract class CSVFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}
  abstract rowData(row:string[]):MatchData

  read(): void {
    fs.readFileSync(this.filename, {
      encoding: "utf-8",
    })
      .split("/n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((this.rowData))
  }



}
