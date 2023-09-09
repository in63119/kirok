const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const axios = require("axios");

const { KAKAO_API_KEY, FRONT_REDIRECT_URI } = process.env;
const kakaoUrl = "https://kauth.kakao.com";

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
    console.log(kakaoToken.data);
    const getUserInfo = async (token) => {
      header.Authorization += token;
      const propertyKeys = {
        property_keys: '["kakao_account.email"]',
      };

      const get = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: header,
        propertyKeys,
      });
      //   const result = get.data;
      return get;
    };
    const userInfo = await getUserInfo(acceseToken);
    const email = userInfo.data.kakao_account.email;
    console.log(email);

    try {
      res.status(200).send(email);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
