const userService = require("../servieces/userService");

const signupWithLogin = async (req, res) => {
  try {
    const authorizationCode = req.body.code;
    console.log("body에 담겨있어야할 코드", authorizationCode);
    const userToken = await userService.signupWithLogin(authorizationCode);

    return res.status(200).json({ token: userToken });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signupWithLogin };
