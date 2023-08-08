const { db } = require("../fireStore");
const { collection, getDocs } = require("firebase/firestore");

module.exports = {
  test: async (req, res) => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        // 가져온 모든 문서들을 확인
        console.log(doc.id, " => ", doc.data());
      });
      res.status(200).send(querySnapshot);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
