import splitReport from "./splitReport.js";
import createSkusTable from "./createSkusTable.js";
import createTotalsTable from "./createTotalsTable.js";
import switchToFirstTable from "./switchToFirstTable.js";
import getReportPeriodText from "./getReportPeriodText.js";
import enableTablesSwitcher from "./enableTablesSwitcher.js";
import tablesSwitcherHandler from "./tablesSwitcherHandler.js";
import createDownloadReportAsXlsxButton from "./createDownloadReportAsXlsxButton.js";
import downloadReportAsXlsxButtonHandler from "./downloadReportAsXLSXButtonHandler.js";
import calcReportTotalsFromSkus from "./utils/calcUtils/utils/calcReportTotalsFromSkus.js";

var yearValueStub = "";
var reportSummaryLabelTextStub = "";

var textContentToDecodeButton = "Получить новый отчёт";

var pageMainContainer = document.getElementById("main");
var decodeReportButton = document.getElementById("decode-report-button");

var buildReportBlock = async (report) => {
  var { dateFrom, dateTo, isCrossYearPeriod, skus, reportId } = report;

  var startYear = +report.dateFrom.split("-")[0];
  var endYear = +report.dateTo.split("-")[0];

  var { reportTotals } = calcReportTotalsFromSkus(skus);
  var tablesContainer = document.createElement("div");

  tablesContainer.hidden = true;
  tablesContainer.setAttribute("tables-container", "");
  tablesContainer.id = "tables-container-" + reportId;

  if (isCrossYearPeriod) {
    var { splitedReport } = splitReport(report);

    var hasSinglePeriodData = splitedReport.length === 1;

    if (!hasSinglePeriodData) {
      var fullReportPeriodText = getReportPeriodText(
        dateFrom,
        dateTo,
      ).reportPeriodText;

      var parentTotalsTable = createTotalsTable(
        reportId,
        reportTotals,
        yearValueStub,
        isCrossYearPeriod,
        fullReportPeriodText,
      );

      tablesContainer.append(parentTotalsTable);

      enableTablesSwitcher([startYear, endYear]);

      var isFirstIteration = true;

      for (var { year, reportPart } of splitedReport) {
        var { reportTotals } = calcReportTotalsFromSkus(reportPart);

        var targetPeriod;

        if (isFirstIteration) {
          targetPeriod = dateFrom;

          isFirstIteration = false;
        } else {
          targetPeriod = dateTo;
        }

        var { reportPeriodText } = getReportPeriodText(
          dateFrom,
          dateTo,
          targetPeriod,
        );

        var childTotalsTable = createTotalsTable(
          reportId,
          reportTotals,
          year,
          isCrossYearPeriod,
          reportPeriodText,
        );

        var skusTable = createSkusTable(report, reportPart);

        tablesContainer.append(childTotalsTable, skusTable);
      }

      switchToFirstTable(startYear);
      tablesSwitcherHandler(startYear, endYear);
      return;
    }

    isCrossYearPeriod = false;
    report.isCrossYearPeriod = false;
  }

  var totalsTable = createTotalsTable(
    reportId,
    reportTotals,
    yearValueStub,
    isCrossYearPeriod,
    reportSummaryLabelTextStub,
  );

  var skusTable = createSkusTable(report, skus);

  tablesContainer.append(totalsTable, skusTable);
  var downloadReportAsXlsxButton = createDownloadReportAsXlsxButton(reportId);

  pageMainContainer.append(downloadReportAsXlsxButton, tablesContainer);

  downloadReportAsXlsxButtonHandler(reportId);

  if (isCrossYearPeriod) {
    window.scrollTo({ top: 500, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 900, behavior: "smooth" });
  }

  decodeReportButton.textContent = textContentToDecodeButton;
};

export default buildReportBlock;
