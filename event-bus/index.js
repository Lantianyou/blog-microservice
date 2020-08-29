const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const events = [];
app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);

  axios.post("http://posts-clusterip-srv:4000/events", event);
  // axios.post("http://localhost:4001/events", event);
  // axios.post("http://localhost:4002/events", event);
  // axios.post("http://localhost:4003/events", event);

  res.send({ status: "ok" });
});

app.listen(4005, () => {
  console.log(`listening in ${4005}`);
});

app.get("/events", (req, res) => {
  res.send(events);
});
