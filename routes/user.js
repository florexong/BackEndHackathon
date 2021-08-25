const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/:icnumber/:password", (req, res) => {
  const { icnumber, password } = req.params;
  User.findOne({
    icnumber: icnumber,
    password: password,
  })
    .then((data) => {
      if (data) {
        res.status(200).json({
          correctUser: true,
          state: data.state,
          hasVoted: data.hasVoted,
        });
      } else {
        res.status(400).json({ correctUser: false });
      }
    })
    .catch((e) => {
      res.status(400).json({ correctUser: false, message: e });
    });
});

router.post("/", (req, res) => {
  const { icnumber, password, state } = req.body;
  const user = new User({
    icnumber: icnumber,
    password: password,
    state: state,
    hasVoted: false,
  })
    .save()
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(400).json({ message: e }));
});

router.patch("/:icnumber", (req, res) => {
  const { hasVoted } = req.body;
  User.findOneAndUpdate(
    {
      icnumber: req.params.icnumber,
    },
    {
      hasVoted: hasVoted,
    },
    (err, doc) => {
      if (err || !doc) {
        res.status(400).json({ message: err });
      } else {
        res.status(200).json("Patched user hasVoted status!");
      }
    }
  );
});

module.exports = router;
