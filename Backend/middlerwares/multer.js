const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // फाइल "uploads" फोल्डर में सेव होगी
  },
  filename: function (req, file, cb) {
    console.log(`middlerwares :: multer.middlerwares :: file :: `);
    console.log(file);
    

    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
