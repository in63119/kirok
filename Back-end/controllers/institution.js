const { db } = require("../fireStore");
const { collection, getDocs } = require("firebase/firestore");

module.exports = {
  // 모든 institution 이름
  getInstitutions: async (req, res) => {
    try {
      let result = [];
      const querySnapshot = await getDocs(collection(db, "institution"));
      querySnapshot.forEach((doc) => {
        result.push(doc.id);
        // console.log(doc.id, " => ", doc.data());
      });
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
