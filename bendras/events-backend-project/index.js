require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
