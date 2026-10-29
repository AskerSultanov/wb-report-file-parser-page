import getRequiredSkuKeys from "./getRequiredSkuKeys.js";
import writeTitlesToSkusWorkSheet from "./writeTitlesToSkusWorkSheet.js";
import { writeValuesToSkusWorkSheet } from "./writeValuesToSkusWorkSheet.js";

var createSkusWorkSheet = async (skus, workSheet) => {
  var requiredSkuKeys = getRequiredSkuKeys(skus);

  workSheet = writeValuesToSkusWorkSheet(workSheet, requiredSkuKeys);
  workSheet = writeTitlesToSkusWorkSheet(workSheet);

  return workSheet;
};

export default createSkusWorkSheet;
