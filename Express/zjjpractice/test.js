const express = require("express");

const path = require("path");

const app = express();

// app.use(express.static(path.resolve(__dirname,'商品汇')));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./商品汇/index.html"));
});

app.listen(8081, () => {
  console.log("服务已启动。。。");
});
