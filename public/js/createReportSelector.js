import insertAfter from "./insertAfter.js";
import enableReport from "./enableReport.js";
import getReportPeriodText from "./getReportPeriodText.js";

var infoBlocksRow = document.getElementById("info-blocks-row");

var createReportSelector = (reports) => {
  var label = document.createElement("label");
  label.textContent = "Выбрать отчет";

  var selector = document.createElement("select");
  selector.id = "selector";

  selector.addEventListener("change", () => {
    for (var option of selector.children) {
      if (option.selected) {
        var reportId = option.value;
        enableReport(reportId);
      }
    }
  });

  for (var { dateFrom, dateTo, reportId } of reports) {
    var option = document.createElement("option");

    var { reportPeriodText } = getReportPeriodText(dateFrom, dateTo);

    option.value = reportId;
    option.textContent = reportPeriodText;

    selector.append(option);
  }

  var selectorContainer = document.createElement("div");
  selectorContainer.id = "selector-container";
  selectorContainer.append(label, selector);

  insertAfter(selectorContainer, infoBlocksRow);
};

export default createReportSelector;
