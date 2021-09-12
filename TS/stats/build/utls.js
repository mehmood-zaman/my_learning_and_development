"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (date) {
    var dateParts = date.split("/").map(function (element) {
        return parseInt(element);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[1]);
};
exports.dateStringToDate = dateStringToDate;
