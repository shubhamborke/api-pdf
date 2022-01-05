const pdfKit = require("pdfkit");

const writePdfData = (dataChunck, wrapPdf, originalData) => {
  const document = new pdfKit();
  document.on("data", dataChunck);
  document.on("end", wrapPdf);
  document.fontSize(20).text(originalData);
  document.end();
};

module.exports = writePdfData;
