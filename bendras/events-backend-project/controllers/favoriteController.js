const asyncHandler = require("express-async-handler");
const Favorite = require("../models/favoriteModel");

//======================== SET FAVORITE ======================//

// @desc POST favorites
// @route POST /api/favorites
// @access PRIVATE

const setFavorite = asyncHandler(async (req, res) => {
  const { event } = req.body;

  const user = req.user.id;

  const favorite = await Favorite.create({ user, event });

  if (favorite) {
    res.status(200).json(favorite);
  } else {
    res.status(400);
    throw new Error("Error, favorite failed to be added!");
  }
});

//======================== DELETE FAVORITE ======================//

// @desc DELETE favorites
// @route DELETE /api/favorites/:id
// @access PRIVATE

const deleteFavorite = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("User is not logged in!");
  }

  const { id } = req.params;
  const user = req.user.id;
  const result = await Favorite.deleteOne({ event: id, user });

  if (result.deletedCount === 1) {
    res.status(200).json({ message: "Favorite deleted" });
  } else {
    res.status(400);
    throw new Error("Error while trying to delete favorites");
  }
});

//======================== GET FAVORITES ======================//

// @desc GET user favorites
// @route Get /api/favorites/
// @access PRIVATE

const getUserFavorites = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("User is not logged in!");
  }

  const user = req.user.id;

  const favorites = await Favorite.find({ user });

  if (favorites) {
    res.status(200).json(favorites);
  } else {
    res.status(400);
    throw new Error("Failed to get favorites");
  }
});

//======================== GET SPECIAL FAVORITE ======================//

// @desc GET Event Favorites
// @route GET /api/favorites/:id
// @access PUBLIC

const getEventFavorites = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const events = await Favorite.find({ event: id });
    res.status(200).json(events.length);
  } catch (error) {
    res.status(400);
    console.error(error);
  }
});

module.exports = {
  setFavorite,
  deleteFavorite,
  getUserFavorites,
  getEventFavorites,
};
