const xlsx = require('xlsx');
const sheet = xlsx.readFile('./netCalculation.xlsx', {cellDates: true});
const input = sheet.Sheets['input'];
const output = sheet.Sheets['output'];
const xlsx_calc = require('xlsx-calc');
const formulajs = require('@formulajs/formulajs');

function updateSheet(newRevenue, newCost) {
    var data = xlsx.utils.sheet_to_json(input);
    // console.log(data);
    var d = xlsx.utils.sheet_to_json(output);
    d.length = data.length;
    console.log(data);
    console.log(d);

    data.push({revenue: parseInt(newRevenue), cost: parseInt(newCost)});
    var newSheet = xlsx.utils.book_new();
    var newContent = xlsx.utils.json_to_sheet(data);

    d.push({net: parseInt(newRevenue) - parseInt(newCost)});
    var n = xlsx.utils.json_to_sheet(d);
    xlsx.utils.book_append_sheet(newSheet, newContent, "input");
    xlsx.utils.book_append_sheet(newSheet, n, "output");
    xlsx.writeFile(newSheet, "newDataFile.xlsx");


    const resultSheet = xlsx.readFile('./newDataFile.xlsx', {cellDates: true});



}

module.exports = updateSheet;