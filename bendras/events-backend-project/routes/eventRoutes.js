const express = require("express");
const router = express.Router();

const {
  setEvent,
  getSpecificEvent,
  getEvents,
  getUserEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

// tikrinama ar public ar private access, kokias funkcijas agles daryti tam tikras useris (pgl admin arba simple role)
const { protect } = require("../middleware/authMiddleware");

router
  .route("/")
  .get(getEvents)
  .get(protect, getUserEvents)
  .post(protect, setEvent);
router
  .route("/user")
  .get(protect, getUserEvents)
router
  .route("/:id")
  .put(protect, updateEvent)
  .delete(protect, deleteEvent)
  .get(protect, getSpecificEvent);

module.exports = router;