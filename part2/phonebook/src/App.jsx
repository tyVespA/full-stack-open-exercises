import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import AllPersons from "./components/AllPersons";
import personService from "../services/personService";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const [filter, setFilter] = useState("");
  const filteredPersons = persons.filter((person) => {
    if (filter === "") {
      return person;
    } else {
      return person.name.toLowerCase().includes(filter.toLowerCase());
    }
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add new</h2>
      <Form persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <AllPersons persons={filteredPersons} />
    </div>
  );
};

export default App;
