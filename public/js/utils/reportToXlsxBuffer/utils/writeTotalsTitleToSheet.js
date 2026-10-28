var totalTitles = [
  "Начало отчетного периода",
  "Конец отчетного периода",
  "Сумма продаж",
  "Продано шт.",
  "Возвратов шт.",
  "К перечислению за товар",
  "Себестоимость",
  "Прочите расходы",
  "Логистика",
  "Приемка",
  "Штрафы",
  "Удержания/выплаты",
  "Хранение",
  "Реклама",
  "Маржинальность %",
  "Итого",
];

var firstColumnNum = 1;

var fontStyles = { bold: true, font: 10 };
var alignmentStyles = { vertical: "middle", horizontal: "left" };

var writeTotalsTitleToSheet = (sheet, cellNum) => {
  var cellName = "A";

  sheet.getColumn(firstColumnNum).width = 27;
  sheet.getColumn(firstColumnNum).font = fontStyles;
  sheet.getColumn(firstColumnNum).alignment = alignmentStyles;

  for (var title of totalTitles) {
    var currentCell = cellName + cellNum;

    sheet.getCell(currentCell).value = title;

    cellNum++;
  }

  return sheet;
};

export default writeTotalsTitleToSheet;
