import { enableTableContainer } from "./toggleTableContainerVisibility.js";
import { enableDownloadReportAsXLSXButton } from "./toggleDownloadReportAsXlsxButtonVisibility.js";

var enableReport = (reportId) => {
  enableTableContainer(reportId);
  enableDownloadReportAsXLSXButton(reportId);
};

export default enableReport;
