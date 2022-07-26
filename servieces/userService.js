const userDao = require("../models/userDao");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const qs = require("qs");
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

  const token = jwt.sign({ id: user.id }, GG_SECRET_KEY);

  return token;
};

const signupWithLogin = async (code) => {
  try {
    const formData = {
      grant_type: "authorization_code",
      client_id: process.env.REST_API_KEY,
      redirect_uri: process.env.REDIRECT_URI,
      code,
    };

    const {
      data: { access_token },
    } = await axios
      .post(`https://kauth.kakao.com/oauth/token?${qs.stringify(formData)}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        return res;
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

const getUserInfo = async (id) => {
  try {
    const userInfo = await userDao.getUserInfo(id);

    return userInfo;
  } catch (err) {
    console.log(err);
  }
};

const createThemeColor = async (id, color) => {
  try {
    const userColor = await userDao.createThemeColor(id, color);

    return userColor;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signupWithLogin,
  getUserInfo,
  createThemeColor,
};
