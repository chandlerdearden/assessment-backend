const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, suggestFortune, getFortuneList, deleteFortunes, repalceFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);
app.post("/api/fortunes/", suggestFortune)
app.get("/api/fortunesList/", getFortuneList)
app.delete("/api/fortunes/", deleteFortunes)
app.put(`/api/fortunes/:id`, repalceFortune)

app.listen(4000, () => console.log("Server running on 4000"));
