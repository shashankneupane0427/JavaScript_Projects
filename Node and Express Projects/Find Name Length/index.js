import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
 const first = req.body["fName"];
 const last = req.body["lName"];
 const finalcut = (first+last).length;
 res.render("index.ejs", {
  number: finalcut
 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
