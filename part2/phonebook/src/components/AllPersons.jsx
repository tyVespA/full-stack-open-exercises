import React from "react";
import Person from "./Person";

export default function AllPersons({ persons }) {
  return (
    <div>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
}
