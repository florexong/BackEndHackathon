const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const ministerRoutes = require("./routes/minister");
const app = express();

const cors = require("cors");

const url =
  "mongodb+srv://kathiressan:kathiressan@cluster0.nuswv.mongodb.net/Hackathon?retryWrites=true&w=majority";

app.use(cors());

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected"))
  .catch((e) => console.error(e));

app.get("/", (req, res) => {
  res.send("API created for MSTW-Hackathon");
});

app.use(express.json());

app.use("/user", userRoutes);
app.use("/minister", ministerRoutes);

app.listen(process.env.PORT || 8000);
