const e = require("express");

function countZeroes(arr) {
const zeroes = []

for(let i=0; i<arr.length; i++) {
if(arr[i] === 0) {
    zeroes.push(0)
}
}

return zeroes.length;
}

module.exports = countZeroes


