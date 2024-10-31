import React from "react";
import Part from "./Part";

export default function Content({ parts }) {
  let totalExercises = 0;
  for (let part of parts) {
    totalExercises += part.exercises;
  }
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}></Part>
      ))}
      <p>total of {totalExercises} exercises</p>
    </div>
  );
}
