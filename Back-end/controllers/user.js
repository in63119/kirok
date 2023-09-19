const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const CryptoJS = require("crypto-js");

const { db } = require("../fireStore");
const { collection, getDocs } = require("firebase/firestore");

// kirokDB functions
const { getAllUsers, getKids, addKid } = require("./kirokDB");

// Team Secret Key
const { SECRET_KEY, PRIVATE_KEY, TEAM_CODE } = process.env;

module.exports = {
  // 모든 user ID (Admin)
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

  // 사용자 정보에 자녀등록
  setUserKids: async (req, res) => {
    const {
      institution,
      name,
      birth,
      isRegistered,
      kakaoEmail,
      kakaoId,
      gender,
    } = req.body;

    const checkKid = await getKids(kakaoId, name);

    const addData = {
      birth: birth,
      gender: gender,
      institution: institution,
      isRegistered: isRegistered,
    };

    if (checkKid) {
      res.status(400).send("이미 아이가 등록되어 있습니다.");
    } else {
      const added = await addKid(kakaoId, name, addData);
      console.log(added);
      if (added) {
        res.status(200).send("등록이 되었습니다.");
      } else {
        res.status(400).send("DB 추가 중 실패");
      }
    }
  },
};
