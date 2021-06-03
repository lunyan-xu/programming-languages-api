const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );



app.get('/', (req, res) => {
    res.json({"message": "ok"});
})


app.listen(port, () => {
    console.log(`An PR Example app listening at http://localhost:${port}`)
});