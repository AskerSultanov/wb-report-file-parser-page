var enableDownloadReportAsXLSXButton = (reportId) => {
  var buttons = document.querySelectorAll("button[xlsx-button]");

  var requiredButtonId = "download-report-as-xlsx-button-" + reportId;

  for (var button of buttons) {
    if (button.id === requiredButtonId) {
      console.log(requiredButtonId);
      button.hidden = false;
    } else {
      button.hidden = true;
    }
  }
};

var disableDownloadReportAsXLSXButtons = () => {
  var buttons = document.querySelectorAll("button[xlsx-button]");

  buttons.forEach((btn) => (btn.hidden = false));
};

export { enableDownloadReportAsXLSXButton, disableDownloadReportAsXLSXButtons };
