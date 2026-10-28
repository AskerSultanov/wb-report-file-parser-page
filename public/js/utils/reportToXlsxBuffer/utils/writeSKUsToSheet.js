import setFormulasToSkusSheet from "./setFormulasToSkusSheet.js";
import { requiredSkusFieldsName } from "./getRequiredSkusFieldsName.js";

var columns = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
];

var alignmentStyles = {
  vertical: "middle",
  horizontal: "center",
};

var writeSKUsToSheet = (sheet, skus) => {
  var startRowNum = 6;

  for (var i = 0; i < skus.length; i++) {
    for (var j = 0; j < columns.length; j++) {
      var column = columns[j];
      var cellAddress = column + startRowNum;

      var skuField = requiredSkusFieldsName[j];
      var skuFieldValue = skus[i][skuField];

      sheet.getCell(cellAddress).alignment = alignmentStyles;

      sheet.getCell(cellAddress).value = skuFieldValue;
    }

    setFormulasToSkusSheet(sheet, startRowNum);

    ++startRowNum;
  }

  return sheet;
};

export { writeSKUsToSheet, columns };
