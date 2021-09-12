"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
var CSVFileReader_1 = require("./CSVFileReader");
var utls_1 = require("./utls");
var MatchResult = /** @class */ (function (_super) {
    __extends(MatchResult, _super);
    function MatchResult() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rowData = function (row) {
            return ((0, utls_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]);
        };
        return _this;
    }
    return MatchResult;
}(CSVFileReader_1.CSVFileReader));
exports.MatchResult = MatchResult;
