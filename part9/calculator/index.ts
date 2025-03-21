import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(height, weight);

  const bmiCalculation = {
    weight,
    height,
    bmi,
  };

  res.json(bmiCalculation);
});

interface ExercisesRequestBody {
  daily_exercises: number[];
  target: number;
}

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body as ExercisesRequestBody;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!daily_exercises || !target) {
    res.status(400).json({ error: "missing parameters" });
  }

  for (let i = 0; i < daily_exercises.length; i++) {
    if (isNaN(Number(daily_exercises[i])))
      res.status(400).json({ error: "malformatted parameters" });
  }

  if (isNaN(Number(target))) {
    res.status(400).json({ error: "malformatted parameters" });
  }

  // fixes bug if i get a "num" instead of num in daily_exercises
  const cleanDailyExercises = daily_exercises.map((hour) => Number(hour));

  res.json(calculateExercises(cleanDailyExercises, target));
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log("App running on port", PORT);
});
