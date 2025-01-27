import React from "react";
import personService from "../../services/personService";

export default function Person({ person }) {
  function handleDelete() {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(person.id);
    }
  }
  return (
    <div>
      {person.name}, {person.number}{" "}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
