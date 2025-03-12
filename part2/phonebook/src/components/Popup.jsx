export default function Success({ name, type, errorMsg }) {
  return (
    <div className={type}>
      {type === "success" ? `Added ${name}` : `Error: ${errorMsg}`}
    </div>
  );
}
