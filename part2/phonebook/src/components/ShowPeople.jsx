/* eslint-disable react/prop-types */
const ShowPeople = ({ persons, filter, filteredNames }) => {
  if (filter != "") {
    return (
      <div>
        {filteredNames.map((person, i) => (
          <p key={i}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    );
  }
  return (
    <div>
      {persons.map((person, i) => (
        <p key={i}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default ShowPeople;
