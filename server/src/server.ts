import express from "express";

const app = express();
const port = 8040;

app.get("/", (req, res) => {
  return res.send("...");
});

app.listen(port);
