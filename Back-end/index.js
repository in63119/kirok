require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("키록 서버에 연결 되었습니다!");
});

// route: 기관 관련
const institutions = require("./routes/institutions");
app.use("/institutions", institutions);

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
