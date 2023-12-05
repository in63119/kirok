require("dotenv").config();

const institutions = require("./routes/institutions");
const kakao = require("./routes/kakao");
const user = require("./routes/users");
const parent = require("./routes/parent");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://kirok.net",
      "https://kirokserver.net",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("키록 서버에 연결 되었습니다!");
});

// routes
app.use("/institutions", institutions);
app.use("/login", kakao);
app.use("/user", user);
app.use("/parent", parent);

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
