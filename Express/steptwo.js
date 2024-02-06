const express = require("express");

const path = require("path");

const app = express();

app.get("/home", (req, res) => {
  console.log(1111);
  //express设置响应体
  // res.status(200).set('qqq',1111).send('12212去去去')
//   res.json({
//     a: 1212,
//   });
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(8080, () => {
  console.log("服务已启动。。。。");
});
