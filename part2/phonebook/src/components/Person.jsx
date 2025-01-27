import React from "react";
import personService from "../../services/personService";

export default function Person({ person }) {
  return (
    <div>
      {person.name}, {person.number}{" "}
      <button onClick={() => personService.deletePerson(person.id)}>
        delete
      </button>
    </div>
  );
}
