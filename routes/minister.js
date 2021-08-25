const express = require("express");
const router = express.Router();
const Minister = require("../models/Minister");

router.get("/:state", (req, res) => {
  const { state } = req.params;
  Minister.find({
    state: state,
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(400).json({ message: e });
    });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Minister.findByIdAndUpdate(id, { $inc: { votes: 1 } })
    .then((data) => res.status(200).json("Updated vote count!"))
    .catch((e) => {
      res.status(400).json({ message: e });
    });
});

module.exports = router;
