var fontStyles = { font: 10 };
var alignmentStyles = { vertical: "middle", horizontal: "right" };

var columnName = "B";

var unusedFields = ["taxableAmount"];

var writeTotalValuesToSheet = (sheet, cellNum, totalValues) => {
  sheet.getColumn(2).width = 17;
  sheet.getColumn(2).font = fontStyles;
  sheet.getColumn(2).alignment = alignmentStyles;

  for (var key in totalValues) {
    if (unusedFields.includes(key)) {
      continue;
    }

    var currentCell = columnName + cellNum;
    cellNum++;

    sheet.getCell(currentCell).value = totalValues[key] ?? "";
  }

  return sheet;
};

export default writeTotalValuesToSheet;
