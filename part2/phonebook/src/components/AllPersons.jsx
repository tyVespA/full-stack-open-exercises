import React from "react";
import Person from "./Person";

export default function AllPersons({ persons, setPersons }) {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          person={person}
          setPersons={setPersons}
          persons={persons}
        />
      ))}
    </div>
  );
}
