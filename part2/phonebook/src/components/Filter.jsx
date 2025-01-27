export default function Filter({ filter, setFilter }) {
  return (
    <form>
      search:{" "}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </form>
  );
}
