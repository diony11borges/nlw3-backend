import express from "express";

import "./database/connection";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  return res.send({
    ok: true,
  });
});

app.listen(3333);
