interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const getAverage = (dailyExerciseHours: number[]) =>
  dailyExerciseHours.reduce(
    (sum: number, currentValue: number) => sum + currentValue,
    0
  ) / dailyExerciseHours.length;

const getTrainingDays = (dailyExerciseHours: number[]) => {
  let trainingDays = 0;
  dailyExerciseHours.map((day) => {
    if (day !== 0) trainingDays++;
  });
  return trainingDays;
};

const calculateSuccess = (trainingDays: number, target: number) => {
  let success: boolean;
  trainingDays >= target ? (success = true) : (success = false);
  return success;
};

const calculateRating = (trainingDays: number, target: number) => {
  if (trainingDays < target) return 1;
  if (trainingDays === target) return 2;
  if (trainingDays > target) return 3;
};

const getRatingDescription = (rating: number) => {
  if (rating === 1) return "pretty bad..";
  if (rating === 2) return "not too bad but could be better.";
  if (rating === 3) return "great job!!";
};

const calculateExercises = (
  dailyExerciseHours: number[],
  target: number
): Result => {
  const trainingDays = getTrainingDays(dailyExerciseHours);
  const rating = calculateRating(trainingDays, target);

  return {
    periodLength: dailyExerciseHours.length,
    trainingDays: trainingDays,
    success: calculateSuccess(trainingDays, target),
    rating: rating,
    ratingDescription: getRatingDescription(rating),
    target: target,
    average: getAverage(dailyExerciseHours),
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
