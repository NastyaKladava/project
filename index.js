const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();

require("dotenv").config();
app.use(express.json({ extended: true }));
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const profileRoute = require("./routes/profile");
const collectionRoute = require("./routes/collection");
const itemRoute = require("./routes/item");
const commentRoute = require("./routes/comment");

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/profile", profileRoute);
app.use("/api/collection", collectionRoute);
app.use("/api/item", itemRoute);
app.use("/api/comment", commentRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.set("strictQuery", false);

async function start() {
  try {
    await mongoose.connect(MONGO_URI).then(() => {
      console.log("Connected to DB");
    });
    app.listen(PORT, () => console.log(`App has been started on PORT ${PORT}`));
  } catch (e) {
    console.log("Server Errors", e.message);
    process.exit(1);
  }
}

start();
