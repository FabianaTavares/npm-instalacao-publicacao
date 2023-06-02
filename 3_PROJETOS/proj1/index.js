var _ = require('lodash');
const moment = require('moment');

const diff = _.difference([1, 2, 3], [2, 3]);

console.log(diff);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = _.concat(arr1, arr2);

console.log(arr3);

// moment

console.log(moment().format());
console.log(moment().format("D/MM/Y hh:mm:ss a"));