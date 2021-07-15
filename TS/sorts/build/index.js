"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () { };
    return Sorter;
}());
var sorter = new Sorter([0, -2, 3, 5]);
sorter.sort();
