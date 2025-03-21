interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseArguments = (args: string[]) => {
  if (args.length < 4) throw new Error("Not enough arguments");

  let target: number;
  if (!isNaN(Number(args[2]))) {
    target = Number(args[2]);
    console.log(target);
  } else {
    throw new Error("The target needs to be a number");
  }

  const dailyExerciseHours: number[] = [];

  for (let i = 3; i < args.length; i++) {
    if (!isNaN(Number(args[i]))) dailyExerciseHours.push(Number(args[i]));
    else throw new Error("One or more values were not numbers");
  }
  console.log(dailyExerciseHours);

  return {
    dailyExerciseHours,
    target,
  };
};

const calculateExercises = (
  dailyExerciseHours: number[],
  target: number
): Result => {
  const average =
    dailyExerciseHours.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / dailyExerciseHours.length;

  let rating;
  let ratingDescription;
  if (average < target - 1) {
    rating = 1;
    ratingDescription = "pretty bad";
  } else if (average >= target - 1 && average <= target + 1) {
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

try {
  const { dailyExerciseHours, target } = parseArguments(process.argv);
  console.log(calculateExercises(dailyExerciseHours, target));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
