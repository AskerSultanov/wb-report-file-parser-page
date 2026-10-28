import { columns } from "./writeSKUsToSheet.js";

var titles = [
  "Артикул",
  "Кол-во",
  "Возвраты",
  "WB реализовал",
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

var rowNumToTitle = 5;

var writeSKUsTitleToSheet = (sheet) => {
  var columnNum = 1;

  for (var i = 0; i < columns.length; i++) {
    var cellAddress = columns[i] + rowNumToTitle;

    sheet.getColumn(columnNum).width = 17;

    sheet.getCell(cellAddress).font = fontStyles;
    sheet.getCell(cellAddress).alignment = alignmentStyles;

    sheet.getCell(cellAddress).value = titles[i];

    columnNum++;
  }

  return sheet;
};

export default writeSKUsTitleToSheet;
