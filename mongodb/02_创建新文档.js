const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

mongoose.set("strictQuery", false);

//once相比on，只执行第一次连接成功的回调，后续重连不执行
mongoose.connection.once("open", () => {
  console.log("连接成功");
  //创建文档的结构对象
  let BookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      default: "匿名",
      unique: true,
    },
    author: String,
    price: Number,
    style: {
      type: String,
      enum: ["1", "2", "3"],
    },
  });

  //创建模型对象，可以操作文档
  let BookModel = mongoose.model("books", BookSchema);
  BookModel.create(
    {
      name: "111",
      author: "2222",
      price: 12,
    },
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(data);
    }
  );
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
