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
  // 모든 유저 Id
  getAllUsers: async () => {
    const result = [];

    try {
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        result.push(doc.id);
      });
      return result;
    } catch (err) {
      console.log(err);
    }
  },
  getUser: async (fieldName, value) => {
    const q = query(collection(db, "user"), where(fieldName, "==", value));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  },
};
