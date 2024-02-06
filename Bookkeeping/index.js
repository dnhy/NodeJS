const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/bookkeeping");
//处理 querystring 格式的请求体
let urlParser = bodyParser.urlencoded({ extended: false });
//处理 JSON 格式的请求体
let jsonParser = bodyParser.json();
const test = mongoose.model(
  "newtest",
  new mongoose.Schema({
    name: String,
    age: Number,
  }),
  "newtest"
);
app.get("/", (req, res) => {
  res.send("success");
});

app.get("/insertnames", async (req, res) => {
  test.create({ name: "1222111", age: 112121 }).then((err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res);
    }
  });
  res.send();
});
app.get("/names", async (req, res) => {
  test.find({ name: "1111" }).then((err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res);
    }
  });
  res.send();
});
app.get("/names/:name", async (req, res) => {
  const params = req.params.name;
  console.log(params);
  console.log(await test.updateOne({ name: "122121111221222231221" }));
  res.send();
});

app.get("/deleteone", async (req, res) => {
  var query = req.query;
  console.log(query.name);
  var data = await test.find({ name: query.name == "" ? null : query.name });
  console.log("data", data);
  data.map((item) => {
    test.deleteOne({ _id: item._id }).then((result, err) => {
      if (err) {
        res.send("删除失败:" + JSON.stringify(err));

        return;
      }
      res.send("删除成功:" + JSON.stringify(result));
    });

    return "";
  });
});

app.post("/delete/:name", (req, res) => {
  test.deleteOne({ name: req.params.name }).then((res) => {
    console.log(res);
    res.send();
  });
});

app.post("/postname", urlParser, (req, res) => {
  const data = req.body;
  console.log(data);
  test.create(data);
  res.send("111");
});

app.listen(8080, () => {
  console.log("server listen on http:127.0.0.1:8080");
});
