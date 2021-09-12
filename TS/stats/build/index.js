"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReader_1 = require("./CSVFileReader");
var reader = new CSVFileReader_1.CSVFileReader("football.csv");
var MatchResult_1 = require("./MatchResult");
reader.read();
console.log(reader.data);
var manUtdWins = 0;
var homeWin = "H";
var awayWin = "A";
console.log("Hii");
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUtdWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUtdWins++;
    }
}
console.log("Man united won " + manUtdWins + " games");
