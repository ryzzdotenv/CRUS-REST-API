const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const userRoutes = require("../routes/users");
app.use("/", userRoutes);

app.get("/", (req, res) => {
    res.send("Selamat datang di REST API!");
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
