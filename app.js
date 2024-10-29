const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/*", indexRouter);

// app.get("/", (req, res) => res.send("hello, world!"));
// app.get("/:username/messages", (req, res) => {
//   console.log(req.params);
//   console.log("Query:", req.query);
//   res.end();
// });

// app.get("/:username/messages/:messageId", (req, res) => {
//   console.log(req.params);
//   res.end();
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first express app ~ listening on port ${PORT}!`);
});
