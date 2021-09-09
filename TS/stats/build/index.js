"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReader_1 = require("./CSVFileReader");
var reader = new CSVFileReader_1.CSVFileReader("football.csv");
reader.read();
var manUtdWins = 0;
var homeWin = "H";
var awayWin = "A";
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
console.log("Hii");
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUtdWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUtdWins++;
    }
}
console.log("Man united won " + manUtdWins + " games");
