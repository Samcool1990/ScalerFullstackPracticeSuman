const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/visit", (req, res) => {
  let visitCount = req.cookies.visitCount;
  if (visitCount) {
    visitCount = Number(visitCount) + 1;
  } else {
    visitCount = 1;
  }
  res.cookie("visitCount", visitCount, { httpOnly: true });
  res.send(`This is your visit number ${visitCount}`);
});

module.exports = app;