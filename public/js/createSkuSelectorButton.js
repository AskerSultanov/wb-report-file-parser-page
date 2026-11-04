import insertAfter from "./insertAfter.js";
import createSetBulkCostPriceButton from "./createSetBulkCostPriceButton.js";
import createButton from "./utils/editableSkuFieldModal/utils/createButton.js";
import createSetBulkOtherExpensesButton from "./createSetBulkOtherExpensesButton.js";
import addCheckboxesToSkusTable from "./utils/checkboxes/addCheckboxesToSkusTable.js";
import removeCheckboxesFromSkusTable from "./utils/checkboxes/removeCheckboxesFromSkusTable.js";

var event = "click";
var text = "Выбрать";
var newText = "Убрать выделение";
var className = "sku-selector-btn";

var bulkCostPriceButtonId = "set-bulk-cost-price";
var bulkOtherExpensesButtonId = "set-bulk-other-expenses";

var createSkuSelectorButton = (skus, reportId, isCrossYearPeriod) => {
  var { year } = skus[0];

  var button = createButton(className, text, {
    event,
    cb: skuSelectorButtonHandler,
  });

  return button;

  function skuSelectorButtonHandler() {
    var { checkboxesIsExist } = checkCheckboxesExist(year);

    if (checkboxesIsExist) {
      button.textContent = text;

      removeCheckboxesFromSkusTable(year);

      var setBulkCostPriceButton = document.getElementById(
        bulkCostPriceButtonId,
      );

      var setBulkOtherExpensesButton = document.getElementById(
        bulkOtherExpensesButtonId,
      );

      setBulkCostPriceButton?.remove();
      setBulkOtherExpensesButton?.remove();
    } else {
      button.textContent = newText;

      addCheckboxesToSkusTable(skus);

      var setBulkCostPriceButton = createSetBulkCostPriceButton(
        skus,
        reportId,
        isCrossYearPeriod,
      );
      var setBulkOtherExpensesButton = createSetBulkOtherExpensesButton(
        skus,
        reportId,
        isCrossYearPeriod,
      );

      insertAfter(setBulkCostPriceButton, button);
      insertAfter(setBulkOtherExpensesButton, setBulkCostPriceButton);
    }
  }
};

export default createSkuSelectorButton;

function checkCheckboxesExist(year) {
  var primaryCheckboxId = "checkbox-" + year;
  var primaryCheckbox = document.getElementById(primaryCheckboxId);

  var querySelector = `input[sku-checkbox="${year}"]`;
  var seconaryCheckboxes = document.querySelectorAll(querySelector);
  seconaryCheckboxes.forEach((item) => item?.remove());

  if (primaryCheckbox || seconaryCheckboxes.length) {
    return { checkboxesIsExist: true };
  }

  return { checkboxesIsExist: false };
}
