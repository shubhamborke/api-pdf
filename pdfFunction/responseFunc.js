const writePdfData = require("../pdfService/writePdfData");

const responseFunc = (req, res) => {
  const outStream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment:filename=output.pdf",
  });
  
  writePdfData(
    (chunck) => outStream.write(chunck),
    () => outStream.end(),
    req.body
  );
};

module.exports = responseFunc;
