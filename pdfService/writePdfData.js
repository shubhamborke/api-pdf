const pdfKit = require("pdfkit");

const writePdfData = (dataChunck, wrapPdf, originalData) => {
  const document = new pdfKit();
  document.on("data", dataChunck);
  document.on("end", wrapPdf);

  // PDF output as json data
  // document.fontSize(20).text(JSON.stringify(originalData))

  // PDF output for odd even data
  const values = Object.values(originalData);
  values.forEach((elem) => {
    elem.forEach((element) =>
      element % 2 === 0
        ? document.fillColor("green").fontSize(20).text(element)
        : document.fillColor("red").fontSize(20).text(element)
    );
    document.moveDown();
  });
  document.end();
};

module.exports = writePdfData;
