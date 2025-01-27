import Header from "./Header";
import Content from "./Content";

export default function Course({ course }) {
  const total = course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );

  return (
    <div>
      <Header name={course.name} />
      {course.parts.map((part) => (
        <Content key={part.id} part={part} />
      ))}
      <strong>Total of {total} exercises</strong>
    </div>
  );
}
