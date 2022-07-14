const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log("server running on port : 3000"));

app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`));

app.post("/", (req, res) => {
  const { n1, n2 } = req.body;
  const ans = Number(n1) + Number(n2);
  res.send(`<h1>The answer is ${ans}</h1>
  <p>go back to <a href="/">Calculator</a></p>`);
});

app.get("/about", (req, res) =>
  res.send(
    `<p><a href="/">Home Page</a></p>
    <h1>Hi, My name is Neeraj Swarnkar. Welcome to simple addition program!</h1>
    <p>I have attended the very good 7 day bootcamp(Recipe API Backend Web Development | JavaScript and NodeJS) from <a href="https://www.devtown.in">devTown</a>. </p>`
  )
);
