import React from "react";
import Part from "./Part";

export default function Content({ parts }) {
  const totalExercises = parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  );
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>total of {totalExercises} exercises</p>
    </div>
  );
}
