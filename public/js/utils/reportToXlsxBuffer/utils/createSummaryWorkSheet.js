import setStylesToSummaryWorkSheet from "./setStylesToSummaryWorkSheet.js";
import writeTitlesToSummaryWorkSheet from "./writeTitlesToSummaryWorkSheet.js";
import writeReportPeriodToSummaryWorkSheet from "./writeReportPeriodToSummaryWorkSheet.js";

var createSummaryWorkSheet = async (report, workSheet) => {
  workSheet = writeTitlesToSummaryWorkSheet(workSheet);

  var { dateFrom, dateTo } = report;
  workSheet = writeReportPeriodToSummaryWorkSheet(workSheet, dateFrom, dateTo);

  setStylesToSummaryWorkSheet(workSheet);

  return workSheet;
};

export default createSummaryWorkSheet;
