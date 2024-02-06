const express = require("express");
const cookieParser = require("cookie-parser");

const path = require("path");

const app = express();
app.use(cookieParser());

app.get("/cookie", (req, res) => {
  //cookie第一次set-cookie，第二次携带cookie
  res.cookie("name", "1111"); //在浏览器关闭时销毁
  //   res.cookie("name", "list", { maxAge: 60 * 1000 });//浏览器关闭不销毁
  res.send("首页111");
});
app.get("/remove-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("删除成功");
});

app.get("/get-cookie", (req, res) => {
  console.log(req.cookies);
  res.send("获取cookie");
});

app.listen(8080, () => {
  console.log("服务已启动。。。。");
});
