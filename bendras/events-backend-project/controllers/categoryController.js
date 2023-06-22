const asyncHandler = require("express-async-handler");

const Category = require("../models/categoryModel");

//========================== GET CATEGORIES ========================//
// @desc Get categories
// @route GET /api/categories
// @access PUBLIC
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).json(categories);
});

//========================== SET CATEGORIES ========================//
// @desc Set categories
// @route POST /api/categories
// @access PRIVATE
const setCategory = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    // klases pagrindu kuriamas naujas objektas
    throw new Error("Please add a required fields");
  }
  const category = await Category.create({
    title: req.body.title,
  });
  res.status(200).json(category);
});

//======================== UPDATE CATEGORY ======================//
// @desc Update category
// @route PUT /api/categories/:id
// @access PRIVATE
const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(400);
    throw new Error("Category not found");
  }

  const updateCategory = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateCategory);
});

//======================== DELETE CATEGORY ======================//
// @desc Delete Category
// @route DELETE /api/categories/:id
// @access PRIVATE
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(400);
    throw new Error("category not found");
  }

  await Category.deleteOne({ _id: req.params.id });

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCategories,
  setCategory,
  updateCategory,
  deleteCategory,
};
