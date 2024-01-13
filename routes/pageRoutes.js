const express = require("express")
const multer = require('multer');
const path = require('path');

const router = express.Router()

const pageController = require("../controllers/pageController")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
const upload = multer({ storage: storage });

router.get("/",pageController.homePage)

module.exports = router