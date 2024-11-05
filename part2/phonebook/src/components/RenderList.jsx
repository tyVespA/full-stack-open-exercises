export default function RenderList({ list }) {
  return (
    <div>
      {list.map((item) => (
        <p key={item.name}>
          {item.name} {item.number}
        </p>
      ))}
    </div>
  );
}
