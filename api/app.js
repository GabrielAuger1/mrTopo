const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const areaRoutes = require("./routes/area");
const routeRoutes = require("./routes/route");
const searchRoutes = require("./routes/search");

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes); // Ensure this line is present
app.use("/api/areas", areaRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api", searchRoutes); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

