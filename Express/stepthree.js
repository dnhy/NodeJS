const express = require("express");

const path = require("path");

const app = express();

let recordMiddleware = function (req, res, next) {
  console.log("全局中间件");
  next();
};

let routerMiddleware = function (req, res, next) {
  console.log("路由中间件");
  next();
};

app.use(recordMiddleware);

//没写静态资源，/访问不到
// app.get("./index.html", (req, res) => {
//     res.send('首页')
// });

app.get("/index.html", (req, res) => {
    res.send('首页111')
});

//静态资源写上去后，/默认访问index.html,其他资源都可以访问
app.use(express.static("./public"));


app.get("/home", (req, res) => {
  console.log("home");
  res.send("2121");
});

// app.get("/test", routerMiddleware, (req, res) => {
//   console.log("test");
//   res.send("wqqq");
// });



app.listen(8080, () => {
  console.log("服务已启动。。。。");
});
