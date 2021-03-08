const xlsx = require('xlsx');
const sheet = xlsx.readFile('./netCalculation.xlsx', {cellDates: true});
const input = sheet.Sheets['input'];
const output = sheet.Sheets['output'];

function updateSheet(newRevenue, newCost) {
    var data = xlsx.utils.sheet_to_json(input);
    // console.log(data);
    data.push({revenue: parseInt(newRevenue), cost: parseInt(newCost)});
    var newSheet = xlsx.utils.book_new();
    const newContent = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(newSheet, newContent, "input");
    xlsx.utils.book_append_sheet(newSheet, output, "output");
    xlsx.writeFile(newSheet, "newDataFile.xlsx");
}

module.exports = updateSheet;