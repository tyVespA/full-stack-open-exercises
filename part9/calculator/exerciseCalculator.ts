interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (dailyExerciseHours: number[], target: number) => {
  const average =
    dailyExerciseHours.reduce(
      (accumulator, currenValue) => accumulator + currenValue,
      0
    ) / dailyExerciseHours.length;

  let rating;
  let ratingDescription;
  if (average - 1 < target) {
    rating = 1;
    ratingDescription = "pretty bad";
  } else if (average - 1 >= target && average + 1 <= target) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 3;
    ratingDescription = "very good!";
  }

  const result = {
    periodLength: dailyExerciseHours.length,
    trainingDays: dailyExerciseHours.filter((item) => item != 0).length,
    success: average >= target ? true : false,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average,
  };
  return result;
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
