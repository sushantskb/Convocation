require("../models/dataBase");
const Submit = require("../models/Submits");
exports.submitInfo = async (req, res) => {
  try {
    const infoErrorObj = req.flash("infoErrors");
    const infoSubmitObj = req.flash("infoSubmit");
    const newImageName = req.flash("newImageName")[0] || null;
    res.render("postPage", { infoErrorObj, infoSubmitObj, newImageName });
  } catch (err) {
    res.status(500).send({ message: err.message || "Error Occured" });
  }
};

exports.submitInfoOnPost = async (req, res) => {
  try {
    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("No files were uploaded");
    } else {
      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;
      uploadPath = require("path").resolve("./") + "/public/upload/" + newImageName;

      imageUploadFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
      });
    }

    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("No files were uploaded");
    } else {
      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;
      uploadPath =
        require("path").resolve("./") + "/public/upload/" + newImageName;

      imageUploadFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
      });
    }

    const newSubmit = new Submit({
      name: req.body.name,
      email: req.body.email,
      reg_no: req.body.reg_no,
      category: req.body.category,
      image: newImageName,
    });

    await newSubmit.save();
    req.flash("infoSubmit", "Your data has been added.");
    req.flash("newImageName", newImageName);
    res.redirect("/submit");
  } catch (error) {
    req.flash("infoErrors", error);
    res.redirect("/submit");
  }
};
