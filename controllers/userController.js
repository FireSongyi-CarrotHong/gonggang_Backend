const userService = require("../servieces/userService");

const signupWithLogin = async (req, res) => {
  try {
    const authorizationCode = req.query.code;
    const userToken = await userService.signupWithLogin(authorizationCode);

    return res.status(200).json({ token: userToken });
  } catch (err) {
    console.log(err);
  }
};

const getUserInfo = async (req, res) => {
  try {
    const id = req.userId;
    const userInfo = await userService.getUserInfo(id);

    return res.status(200).json({ userInfo }.userInfo);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signupWithLogin, getUserInfo };
