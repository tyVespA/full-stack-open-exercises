import express = require("express");
const app = express();
import { isNotNumber } from "./utils/isNotNumber";
import { calculateBmi } from "./bmiCalculator";

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);
  const resObj = {
    weight,
    height,
    bmi: calculateBmi(height, weight),
  };

  if (isNotNumber(weight) || isNotNumber(height)) {
    res.send({ error: "malformatted parameters" });
  }
  res.send(resObj);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
