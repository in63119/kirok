const { db } = require("../fireStore");
const { collection, getDocs, doc } = require("firebase/firestore");

// DB
const { getInstitutionInfo, getDocuments } = require("./kirokDB");

/*
  기관용 API
*/

module.exports = {
  // 모든 institution 이름
  getInstitutions: async (req, res) => {
    try {
      const result = await getDocuments("institution");
      console.log(result);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  // 기업 로그인 전용
  institutionLogin: async (req, res) => {
    console.log("요청 데이터", req.query);
    const account = req.query;
    const data = await getInstitutionInfo(account);

    if (data.result) {
      res.status(200).send(data);
    } else {
      res.status(400).send(data);
    }
  },
};
