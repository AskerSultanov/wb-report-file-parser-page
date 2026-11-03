var createDownloadReportAsXlsxButton = (reportId) => {
  var button = document.createElement("button");
  button.hidden = true;
  button.setAttribute("xlsx-button", "");
  button.textContent = " Скачать отчёт как эксель";
  button.className = "download-report-as-xlsx-button";
  button.id = `download-report-as-xlsx-button-${reportId}`;

  var buttonContainer = document.createElement("div");
  buttonContainer.append(button);
  buttonContainer.className = "download-xlsx-wrapper";
  buttonContainer.id = `download-xlsx-wrapper-${reportId}`;

  return buttonContainer;
};

export default createDownloadReportAsXlsxButton;
