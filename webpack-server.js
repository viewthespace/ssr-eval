const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const webpackOptions = require("./webpack.config");
const compiler = webpack(webpackOptions);
const express = require("express");
const app = express();

app.use(middleware(compiler, {}));

app.get("/api/user/1", (req, res) => {
  res.json({ name: 'sam' })
});

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
