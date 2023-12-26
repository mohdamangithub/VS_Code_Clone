var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET Home Page. */
router.get("/", function (req, res) {
  fs.readdir("./uploads", { withFileTypes: true }, function (err, files) {
    res.render("index", { files: files, folder: "VS Code" });
  });
});
router.get("/file/:filename", function (req, res) {
  fs.readdir("./uploads", { withFileTypes: true }, function (err, files) {
    fs.readFile(
      `./uploads/${req.params.filename}`,
      "utf-8",
      function (err, filedata) {
        res.render("opened", {
          files: files,
          data: req.params.filename,
          folder: "VS Code",
          filedata,
        });
      }
    );
  });
});

router.post("/updated/:data", function (req, res) {
  fs.writeFile(
    `./uploads/${req.params.data}`,
    `${req.body.txt}`,
    function (err) {
      err ? res.send(err) : res.redirect("back");
    }
  );
});
router.get("/back", function (req, res) {
  res.redirect("back");
});

router.get("/delete/:type/:filenam", function (req, res) {
  if (req.params.type === "folder") {
    fs.rmdir(`./uploads/${req.params.filenam}`, function (err) {
      err ? res.send(err) : res.redirect("back");
    });
  } else {
    fs.unlink(`./uploads/${req.params.filenam}`, function (err) {
      err ? res.send(err) : res.redirect("back");
    });
  }
});
router.post("/createfile", function (req, res) {
  fs.writeFile(`./uploads/${req.body.filename}`, "", function (err) {
    err ? res.send(err) : res.redirect("back");
  });
});
router.post("/renamed/:filename", function (req, res) {
  fs.rename(
    `./uploads/${req.params.filename}`,
    `./uploads/${req.body.rename}`,
    function (err) {
      err ? res.send(err) : res.redirect("back");
    }
  );
});
router.post("/createfolder", function (req, res) {
  fs.mkdir(`./uploads/${req.body.foldername}`, function (error) {
    error ? res.send(error) : res.redirect("back");
  });
});

module.exports = router;
