const xlsx = require('xlsx');
const sheet = xlsx.readFile('./netCalculation.xlsx');

function updateSheet(revenue, cost) {
    console.log(sheet);
}

module.exports = updateSheet;