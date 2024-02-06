const express = require("express");
const app = express();
app.get("/home", (req, res) => {
//   console.log("req :", req);
//   console.log("res :", res);
  res.end("end");
});

app.get('/test/:id.html',(req,res) => {
    console.log(req.params);
    res.end('12323')
})

app.post('/submit',(req,res) => {
    res.end('submit')
})

app.listen(3000, () => {
  console.log("linstening....");
});
