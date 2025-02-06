import { isNotNumber } from "./utils/isNotNumber";

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
  const checkForNonNumericArgs = args.slice(3).some(isNotNumber);

  if (isNotNumber(args[2]) || checkForNonNumericArgs) {
    throw new Error("Provided values were not numbers!");
  } else {
    return {
      target: Number(args[2]),
      dailyExerciseHours: args.slice(3).map((arg) => Number(arg)),
    };
  }
};

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

const calculateSuccess = (averageHrsTrained: number, target: number) => {
  let success: boolean;
  if (averageHrsTrained >= target) {
    success = true;
  } else {
    success = false;
  }
  return success;
};

const calculateRating = (averageHrsTrained: number, target: number): number => {
  if (averageHrsTrained < target) return 1;
  if (averageHrsTrained === target) return 2;
  if (averageHrsTrained > target) return 3;
  return 0;
};

const getRatingDescription = (rating: number): string => {
  if (rating === 1) return "pretty bad..";
  if (rating === 2) return "not too bad but could be better.";
  if (rating === 3) return "great job!!";
  return "error";
};

export const calculateExercises = (
  target: number,
  dailyExerciseHours: number[]
): Result => {
  const trainingDays = getTrainingDays(dailyExerciseHours);
  const averageHrsTrained = getAverage(dailyExerciseHours);
  const rating = calculateRating(averageHrsTrained, target);

  return {
    periodLength: dailyExerciseHours.length,
    trainingDays: trainingDays,
    success: calculateSuccess(averageHrsTrained, target),
    rating: rating,
    ratingDescription: getRatingDescription(rating),
    target: target,
    average: averageHrsTrained,
  };
};

if (require.main === module) {
  try {
    const { target, dailyExerciseHours } = parseArguments(process.argv);
    console.log(calculateExercises(target, dailyExerciseHours));
  } catch (error: unknown) {
    let errorMessage = "Something bad happened.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    console.log(errorMessage);
  }
}
