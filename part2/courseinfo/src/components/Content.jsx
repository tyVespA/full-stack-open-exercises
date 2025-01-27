export default function Content({ course }) {
  return (
    <p>
      {course.name} {course.exercises}
    </p>
  );
}
