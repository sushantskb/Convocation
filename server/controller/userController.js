const User = require("../models/User");
exports.home = async (req, res) => {
  res.render("home");
};

exports.login = async (req, res) => {
  return res.render("login");
  // return res.render("login",{message:"Please Enter your username and password"});
};

exports.loginAction = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === "admin") {
      if (password === process.env.ADPASS) {
        return res.redirect("/admin");
      } else{
        return res.render("login", { err: "Password is incorrect!" });
      }
    } else {
      const user = await User.findOne({ username: username });
      if (user.password === password) {
        return res.redirect("submit");
      } else {
        return res.render("login", { err: "Incorrect Password" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.render("login", { err: "No such user found" });
  }
};

exports.check = async (req, res) => {
  try {
    const data = await User.find({});
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
