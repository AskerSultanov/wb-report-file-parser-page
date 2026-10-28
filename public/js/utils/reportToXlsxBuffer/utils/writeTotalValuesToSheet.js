var fontStyles = { font: 10 };
var alignmentStyles = { vertical: "middle", horizontal: "right" };

var columnWidth = 17;
var columnNumOfValues = 2;
var columnNameOfValues = "B";

var writeTotalValuesToSheet = (workSheet, rowNum, reportSummary) => {
  workSheet.getColumn(columnNumOfValues).font = fontStyles;
  workSheet.getColumn(columnNumOfValues).width = columnWidth;
  workSheet.getColumn(columnNumOfValues).alignment = alignmentStyles;

  for (var key in reportSummary) {
    var cellAddress = columnNameOfValues + rowNum;
    rowNum++;

    workSheet.getCell(cellAddress).value = reportSummary[key] ?? "";
  }

  return workSheet;
};

export default writeTotalValuesToSheet;
