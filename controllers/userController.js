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

module.exports = { signupWithLogin };
