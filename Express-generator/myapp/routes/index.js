var express = require("express");
var formidable = require("formidable");
console.log("formidable :", formidable);

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/portrait", (req, res) => {
  res.render("portrait");
});

router.post("/portrait", (req, res) => {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/images",
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    // console.log('files :', files);
    // console.log('fields :', fields);
    if (err) {
      next(err);
      return;
    }
    // res.json({ fields, files });
    res.send(req.get("host") + "/images/" + files.portrait.newFilename);
  });
});
module.exports = router;
