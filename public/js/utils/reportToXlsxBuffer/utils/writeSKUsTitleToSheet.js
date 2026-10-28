import { columns } from "./writeSKUsToSheet.js";

var titles = [
  "Артикул",
  "Кол-во",
  "Возвраты",
  "WB реализовал",
  "Налогооблагаемая база (УСН Доходы)",
  "Выплаты продавцу",
  "Доставка",
  "Удержания/    выплаты",
  "Реклама",
  "Хранение",
  "Приемка",
  "Штрафы",
  "Выплата с вычетом всех услуг WB",
  "Себестоимость 1ед.",
  "Прочите расходы",
  "Налоги",
  "Маржинальность %",
  "Итого",
];

var fontStyles = {
  bold: true,
  font: 10,
};

var alignmentStyles = {
  vertical: "middle",
  horizontal: "center",
  wrapText: true,
};

var columnWidth = 17;
var titleRowNum = 5;

var writeSKUsTitleToSheet = (workSheet) => {
  var columnNum = 1;

  for (var i = 0; i < columns.length; i++) {
    var cellAddress = columns[i] + titleRowNum;

    workSheet.getCell(cellAddress).value = titles[i];
    workSheet.getCell(cellAddress).font = fontStyles;
    workSheet.getColumn(columnNum).width = columnWidth;
    workSheet.getCell(cellAddress).alignment = alignmentStyles;

    columnNum++;
  }

  return workSheet;
};

export default writeSKUsTitleToSheet;
