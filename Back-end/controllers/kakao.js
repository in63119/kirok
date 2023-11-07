const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const axios = require("axios");

const { KAKAO_API_KEY, FRONT_REDIRECT_URI } = process.env;
const kakaoUrl = "https://kauth.kakao.com";

const { checkUser, addUser } = require("../controllers/kirokDB");

/*
  카카오 API
*/

module.exports = {
  kakaoLogin: async (req, res) => {
    const { code } = req.body;
    const data = {
      grant_type: "authorization_code",
      client_id: KAKAO_API_KEY,
      redirect_uri: FRONT_REDIRECT_URI,
      code: code,
    };
    const header = {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: "Bearer ",
    };
    const queryString = Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

    const kakaoToken = await axios.post(
      `${kakaoUrl}/oauth/token`,
      queryString,
      { headers: header }
    );
    const acceseToken = kakaoToken.data.access_token;

    const getUserInfo = async (token) => {
      header.Authorization += token;
      const propertyKeys = {
        property_keys: '["kakao_account.email"]',
      };

      const get = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: header,
        propertyKeys,
      });
      return get;
    };
    const userInfo = await getUserInfo(acceseToken);

    const email = userInfo.data.kakao_account.email;
    const kakaoId = userInfo.data.id;

    const isExists = await checkUser(kakaoId);

    // kirok DB에 있으면
    if (isExists) {
      try {
        res.status(200).send({ email: email, kakaoId: kakaoId });
      } catch (err) {
        res.status(400).send(err);
      }
      // kirok DB에 없으면
    } else {
      const added = await addUser(kakaoId, email);

      if (added) {
        res.status(200).send({ email: email, kakaoId: kakaoId });
      } else {
        res.status(400).send("DB 추가 중 실패");
      }
    }
  },
};
