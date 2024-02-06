const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

mongoose.set("strictQuery", false);

//once相比on，只执行第一次连接成功的回调，后续重连不执行
mongoose.connection.once("open", () => {
  console.log("连接成功");
});

mongoose.connection.on("error", () => {
  console.log("连接失败");
});

mongoose.connection.on("close", () => {
  console.log("连接关闭");
});

//手动关闭
setTimeout(() => {
  mongoose.disconnect();
}, 2000);
