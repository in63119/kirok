const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const CryptoJS = require("crypto-js");

const { db } = require("../fireStore");
const { collection, getDocs } = require("firebase/firestore");

// kirokDB functions
const { getAllUsers } = require("./kirokDB");

// Team Secret Key
const { SECRET_KEY, PRIVATE_KEY, TEAM_CODE } = process.env;

module.exports = {
  // 모든 user ID
  getAllUsersId: async (req, res) => {
    const key1 = req.query.admin === SECRET_KEY;
    const key2 =
      CryptoJS.AES.decrypt(req.query.admin, PRIVATE_KEY).toString(
        CryptoJS.enc.Utf8
      ) === TEAM_CODE;

    if (key1 && key2) {
      try {
        const result = await getAllUsers();

        res.status(200).send(result);
      } catch (err) {
        res.status(400).send(err);
      }
    } else {
      res.status(400).send("Team SecretKey를 확인해주세요.");
    }
  },
};
