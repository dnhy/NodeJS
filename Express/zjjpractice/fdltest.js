const express = require("express");

const path = require("path");

const app = express();

app.use((req, res, next) => {
  let referer = req.get("referer");
  console.log(referer);
  if (referer) {
    let urlObj = new URL(referer);
    let hostname = urlObj.hostname;
    console.log(hostname);
    if (hostname != "127.0.0.1") {
      res.status(404).send("<h1>404 Not Found</h1>");
      return;
    }
  }
  
  next();
});

app.use(express.static(path.resolve(__dirname, "./商品汇")));

app.listen("8081", () => {
  console.log("服务已启动。。。");
});
