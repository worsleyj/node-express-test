const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const PORT = process.env.PORT || 3000;

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/*", indexRouter);

app.listen(PORT, () => {
  console.log(`My first express app ~ listening on port ${PORT}!`);
});
