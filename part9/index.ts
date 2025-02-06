import express from "express";
const app = express();
import { isNotNumber } from "./utils/isNotNumber";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

app.use(express.json());

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

  if (!weight || !height || isNotNumber(weight) || isNotNumber(height)) {
    res.json({ error: "malformatted parameters" });
  }
  res.json(resObj);
});

app.post("/exercises", (_req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const reqBody = {
    daily_exercises: [1, 0, 2, 0, 3, 0, 2.5],
    target: 2.5,
  };

  if (!reqBody.daily_exercises || !reqBody.target) {
    res.json({ error: "parameters missing" });
  }

  if (
    reqBody.daily_exercises.some(isNotNumber) ||
    isNotNumber(reqBody.target)
  ) {
    res.json({ error: "malformatted parameters" });
  }

  res.json(calculateExercises(reqBody.target, reqBody.daily_exercises));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
