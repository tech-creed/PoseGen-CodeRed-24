const express = require("express")
const multer = require('multer');
const path = require('path');

const router = express.Router()

const pageController = require("../controllers/pageController")
const authController = require("../controllers/authController")


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
router.get("/auth",pageController.authPage)
router.get("/prompt-to-img",pageController.genP2IPage)
router.get("/prompt-and-img",pageController.genPandIPage)
router.get("/profile-update",pageController.profileUpdatePage)
router.get("/dashboard",pageController.dashboard)
router.post("/profile-update",authController.profileUpdate)


module.exports = router