import React from "react";
import personService from "../../services/personService";

export default function Person({ person, setPersons, persons }) {
  function handleDelete() {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(person.id).then(() => {
        setPersons(persons.filter((p) => p.id !== person.id));
      });
    }
  }
  return (
    <div>
      {person.name}, {person.number}{" "}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
