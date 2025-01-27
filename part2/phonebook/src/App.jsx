import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import AllPersons from "./components/AllPersons";
import personService from "../services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);

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
