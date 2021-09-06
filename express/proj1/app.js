import express from "express";
const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/prash", (req, res) => {
  res.send("hello prash");
});

app.listen(port, () => {
  console.log(`server satrting at ${port}`);
});
