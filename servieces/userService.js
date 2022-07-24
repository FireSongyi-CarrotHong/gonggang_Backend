const userDao = require("../models/userDao");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const qs = require("querystring");
const GG_SECRET_KEY = process.env.SECRET_KEY;

const userCheck = async (data) => {
  const user = await userDao.getUserId(data.id);

  if (user.length === 0) {
    const userInfo = await userDao.createUser(
      data.id,
      data.properties.nickname,
      data.properties.profile_image
    );
  }

  const token = jwt.sign({ id: user[0].id }, GG_SECRET_KEY);
  console.log("token", token);

  return token;
};

const signupWithLogin = async (code) => {
  try {
    const formData = {
      grant_type: "authorization_code",
      client_id: process.env.REST_API_KEY,
      redirect_uri: process.env.REDIRECT_URI,
      code,
      client_secret: process.env.CLIENT_SECRET,
    };

    const queryStringBody = Object.keys(formData)
      .map((k) => encodeURIComponent(k) + "=" + encodeURI(formData[k]))
      .join("&");

    const {
      data: { access_token },
    } = await axios
      .post(`https://kauth.kakao.com/oauth/token`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: queryStringBody,
      })
      .then((res) => {
        console.log("access_token", res);
        return res.data;
      });

    const getUserInfo = await axios
      .get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: "Bearer " + access_token,
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        return res;
      });

    const userToken = await userCheck(getUserInfo.data);

    return userToken;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signupWithLogin,
};
