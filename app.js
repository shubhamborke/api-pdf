const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const responseFunc = require("./pdfFunction/responseFunc");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/", cors(), responseFunc);

app.listen(3000, () => console.log("listenig on 3000"));
