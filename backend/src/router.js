const router = require("express").Router();
const datas = require("../datas");

router.get("/", (req, res) => {
  res.json(datas).status(200);
});

router.get("/:filename", (req, res) => {
  res.sendFile(`./public/mp3/${req.params.filename}`, { root: "./" });
});

// module.exports = router;
