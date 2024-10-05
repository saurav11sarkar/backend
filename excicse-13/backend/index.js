import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is rady");
});

app.get("/api/joke", (req, res) => {
  const joke = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "A two joke",
      content: "This is a two joke",
    },
    {
      id: 3,
      title: "A three joke",
      content: "This is a three joke",
    },
    {
      id: 4,
      title: "A four joke",
      content: "This is a four joke",
    },
  ];
  res.send(joke);
});

const port = 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
