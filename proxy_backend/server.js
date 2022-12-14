const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const axios = require("axios");

const app = express();

const PORT = 5050;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
connectDB();

app.get("/", (req, res) => {
  res.send("trashgo server running");
});

app.post("/api/upload", async (req, res) => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const body = req.body.img;
    const response = await axios.post(
      "http://192.168.50.74:8000/api/upload",
      body,
      config
    );
    return res.status(200).json(JSON.parse(response.data));
  } catch (error) {
    console.error(error);
  }
});
app.use("/api/auth", require("./routes/auth.js"));

app.listen(PORT || process.env.PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
