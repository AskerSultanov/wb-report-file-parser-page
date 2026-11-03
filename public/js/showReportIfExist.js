import enableReport from "./enableReport.js";
import buildReportBlock from "./buildReportBlock.js";
import createReportSelector from "./createReportSelector.js";
import getReportsFromLocalStorage from "./getReportsFromLocalStorage.js";
import downloadReportAsXlsxButtonHandler from "./downloadReportAsXLSXButtonHandler.js";
import insertButtonToDownloadReportsInZip from "./utils/reportFileUploadModalWindow/insertButtonToDownloadReportsInZip.js";

var showReportIfExist = () => {
  try {
    var { reports } = getReportsFromLocalStorage();

    if (!reports.length) {
      return;
    }

    var reportIds = reports.map(({ dateFrom, dateTo, reportId }) => {
      return { dateFrom, dateTo, reportId };
    });

    var firstReport = reports.splice(0, 1)[0];

    buildReportBlock(firstReport);
    enableReport(firstReport.reportId);
    downloadReportAsXlsxButtonHandler(firstReport.reportId);

    for (var restReport of reports) {
      buildReportBlock(restReport);
      downloadReportAsXlsxButtonHandler(restReport.reportId);
    }

    insertButtonToDownloadReportsInZip();
    createReportSelector(reportIds);
  } catch {
    return;
  }
};

showReportIfExist();
