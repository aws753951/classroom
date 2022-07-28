const router = require("express").Router();
const User = require("../models").UserModel;
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;

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
router.post("/login", (req, res) => {});

module.exports = router;
