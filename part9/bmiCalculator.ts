import { isNotNumber } from "./utils/isNotNumber";

const parseArguments = (args: string[]) => {
  if (isNotNumber(args[2]) || isNotNumber(args[3]))
    throw new Error("Provided values were not numbers!");
  else if (args.length > 4) throw new Error("Too many arguments");
  else {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  }
};

const calculateBmi = (height: number, weight: number) => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  if (bmi < 16) return "Underweight (Severe thinness) ";
  if (bmi < 17) return "Underweight (Moderate thinness)";
  if (bmi < 18.5) return "Underweight (Mild thinness)";
  if (bmi < 25) return "Normal range";
  if (bmi < 30) return "Overweight (Pre-obese)";
  if (bmi < 35) return "Obese (Class I)";
  if (bmi < 40) return "Obese (Class II)";
  return "Obese (Class III) ";
};

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

// console.log(calculateBmi(Number(process.argv[2]), Number(process.argv[3])));
