import express from "express";
import cors from "cors";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static(join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.sendFile(join(__dirname, "views", "index.html"));
});

// Support /api and /api/:date (Express 5 optional parameters use array paths).
app.get(["/api", "/api/:date"], (req, res) => {
  const dateParam = req.params.date;
  let date;

  if (dateParam === undefined) {
    date = new Date();
  } else if (/^\d+$/.test(dateParam)) {
    date = new Date(Number(dateParam));
  } else {
    date = new Date(dateParam);
  }

  if (Number.isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Your app is listening on port " + PORT);
});
