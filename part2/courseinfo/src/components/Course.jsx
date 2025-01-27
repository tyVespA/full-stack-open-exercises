import Header from "./Header";
import Content from "./Content";

export default function Course({ course }) {
  const total = course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return (
    <div>
      <Header course={course} />
      <Content course={course.parts[0]} />
      <Content course={course.parts[1]} />
      <Content course={course.parts[2]} />
      {total}
    </div>
  );
}
