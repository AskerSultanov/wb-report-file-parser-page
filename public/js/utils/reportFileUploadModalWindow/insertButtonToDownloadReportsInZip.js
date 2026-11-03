import insertAfter from "../../insertAfter.js";
import downloadReportsInZip from "./downloadReportsInZip.js";

var infoBlocksRow = document.getElementById("info-blocks-row");

var insertButtonToDownloadReportsInZip = () => {
  var button = document.createElement("button");

  button.id = "download-reports-in-zip";
  button.textContent = "Скачать отчеты";
  button.onclick = () => downloadReportsInZip();

  insertAfter(button, infoBlocksRow);
};

export default insertButtonToDownloadReportsInZip;
