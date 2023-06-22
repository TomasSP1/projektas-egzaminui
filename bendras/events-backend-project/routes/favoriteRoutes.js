const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  setFavorite,
  getUserFavorites,
  deleteFavorite,
  getEventFavorites,
} = require("../controllers/favoriteController");

router.route("/").post(protect, setFavorite).get(protect, getUserFavorites);
router.route("/:id").delete(protect, deleteFavorite).get(getEventFavorites);

module.exports = router;
