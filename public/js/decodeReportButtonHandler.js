import createUploadModal from "./utils/reportFileUploadModalWindow/createUploadModal.js";

var decodeReportButton = document.getElementById("decode-report-button");

var textContentToDecodeReportButton = "Расшифровка отчета без регистрации";

var decodeReportButtonHandler = () => {
  decodeReportButton.onclick = () => {
    var tablesContainers = document.querySelectorAll("div[tables-container]");

    if (tablesContainers.length) {
      var confirmed = confirm(
        "Получение нового отчета привёдет к потере текущего.\nПродолжить?",
      );

      if (confirmed) {
        localStorage.clear();
        removeReportSelector();
        removeReportsSummaryLabels();
        removeownloadReportsInZipButton();
        removeAllDownloadReportInXlsxButtons();
        removeAllTablesContainers(tablesContainers);
        decodeReportButton.textContent = textContentToDecodeReportButton;

        createUploadModal();
      }
    } else {
      createUploadModal();
    }
  };
};

decodeReportButtonHandler();

function removeAllDownloadReportInXlsxButtons() {
  var buttonContainers = document.querySelectorAll(".download-xlsx-wrapper");
  buttonContainers.forEach((item) => item.remove());
}

function removeAllTablesContainers(tablesContainers) {
  tablesContainers.forEach((item) => item.remove());
}

function removeReportSelector() {
  var selectorContainer = document.getElementById("selector-container");
  selectorContainer?.remove();
}

function removeReportsSummaryLabels() {
  var labels = document.querySelectorAll(".report-summary-label-wrapper");
  labels.forEach((label) => label.remove());
}

function removeownloadReportsInZipButton() {
  var button = document.getElementById("download-reports-in-zip");
  button?.remove();
}
