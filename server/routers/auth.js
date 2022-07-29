const router = require("express").Router();
const User = require("../models").UserModel;
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  let { username, email, password, role } = req.body;
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let foundUser = await User.findOne({ email });
  if (foundUser) return res.status(400).send("Email has been registered");
  let newUser = new User(req.body);
  newUser
    .save()
    .then(() => {
      res.status(200).send("Sccuessfully register this account.");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Account not saved, please contact author.");
    });
});

router.post("/login", (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let { email, password } = req.body;
  User.findOne({ email }, function (err, user) {
    if (err) return res.status(400).send(err);
    if (!user) return res.status(401).send("Wrong email or password");
    user.comparePassword(password, function (err, result) {
      if (err) return res.status(400).send(err);
      if (result) {
        user.lastLogin = Date.now() + 8 * 60 * 60 * 1000;
        let token = jwt.sign(
          { _id: user._id, email: user.email },
          process.env.JWTPASSWORD
        );
        res.send({
          success: true,
          token: "JWT " + token,
          user,
        });
      } else {
        res.status(401).send("Wrong email or password");
      }
    });
  });
});

module.exports = router;
