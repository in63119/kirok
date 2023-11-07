const { db } = require("../fireStore");
const {
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
  addDoc,
  setDoc,
} = require("firebase/firestore");

/*
  Firestore 기능 모음
*/

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

  // 유저 확인
  checkUser: async (docName) => {
    const document = doc(db, "user", `${docName}`);
    const documentSnapshot = await getDoc(document);

    const result = documentSnapshot.exists();
    const test2 = documentSnapshot.id;
    const test3 = documentSnapshot.data();

    // console.log("docName : ", docName);
    // console.log("documentSnapshot.exists() : ", result);
    // console.log("documentSnapshot.id : ", test2);
    // console.log("documentSnapshot.data() : ", test3);

    return result;
  },

  // 유저 추가
  addUser: async (kakaoId, kakaoEmail) => {
    const document = await doc(db, "user", `${kakaoId}`);
    const data = {
      email: kakaoEmail,
      "wallet-address": "",
      "wallet-name": "",
    };

    await setDoc(document, data);
    const addedDocumentId = document.id;

    if (addedDocumentId === `${kakaoId}`) {
      return true;
    } else {
      return false;
    }
  },

  // 자녀가 있는지 확인
  getKids: async (kakaoId, name) => {
    let result = false;
    const q = query(collection(db, "user", `${kakaoId}`, "kids"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const docObj = {
        ...doc.data(),
        id: doc.id,
      };
      if (doc.id === name) {
        result = true;
      }
    });

    return result;
  },

  // 자녀가 기관에 등록 되있는지 확인
  getKidRegistered: async (kakaoId, name) => {
    let result;
    const q = query(collection(db, "user", `${kakaoId}`, "kids"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (name === doc.id) {
        result = doc.data().isRegistered;
      }
    });

    return result;
  },

  // 자녀 등록
  addKid: async (kakaoId, name, info) => {
    const docRef = doc(collection(db, "user", `${kakaoId}`, "kids"), name);
    await setDoc(docRef, info);

    const addedDocumentId = docRef.id;
    if (addedDocumentId === name) {
      return true;
    } else {
      return false;
    }
  },

  // 기업 로그인
  getInstitutionInfo: async (data) => {
    let result = {
      result: false,
      message: "",
      incorrectData: "",
      name: "",
    };

    const querySnapshot = await getDocs(collection(db, "institution"));
    querySnapshot.forEach((doc) => {
      const innerData = doc.data();
      // console.log(doc.id, " => ", doc.data());

      if (innerData.id === data.id) {
        if (innerData.password === data.password) {
          result.result = true;
          result.message = "정보가 일치합니다.";
          result.incorrectData = "success";
          result.name = doc.id;
        } else {
          result.message = "비밀번호가 잘못됨.";
          result.incorrectData = "password";
        }
      } else {
        result.message = "아이디가 잘못됨.";
        result.incorrectData = "id";
      }
    });

    return result;
  },

  // 기관 등록 요청 대기열에 추가
  registrationRequest: async (info) => {
    const docRef = doc(
      collection(
        db,
        "institution",
        `${info.institution}`,
        "RegistrationRequest"
      ),
      info.name
    );
    await setDoc(docRef, info);

    const addedDocumentId = docRef.id;
    if (addedDocumentId === info.name) {
      return true;
    } else {
      return false;
    }
  },

  // 아이가 기관 등록 대기열에 있는지 조회
  checkRegistrationRequest: async (info) => {
    let result = false;
    const q = query(
      collection(
        db,
        "institution",
        `${info.institution}`,
        "RegistrationRequest"
      )
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (
        info.name === doc.id &&
        info.birth === doc.data().birth &&
        info.gender === doc.data().gender
      ) {
        result = true;
      }
    });

    return result;
  },
};
