require("dotenv").config();

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
const institutions = require("./routes/institutions");
app.use("/institutions", institutions);
const kakao = require("./routes/kakao");
app.use("/login", kakao);
const user = require("./routes/users");
app.use("/user", user);

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
