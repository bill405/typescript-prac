"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToString = exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    // 28/10/2018
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
var luxon_1 = require("luxon");
var dateToString = function (dateString) {
    // '2021-01-17T05:22:32.000Z'
    var date = luxon_1.DateTime.fromISO(dateString);
    var test = date.toLocaleString(luxon_1.DateTime.DATE_FULL);
    console.log(test);
    return date.toMillis();
};
exports.dateToString = dateToString;
// const date = dateToString('2021-01-17T05:22:32.000Z');
// console.log(date);
