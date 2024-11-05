import { useState } from "react";
import Heading from "./components/Heading";
import FilterInput from "./components/FilterInput";
import AddPersonForm from "./components/AddPersonForm";
import RenderList from "./components/RenderList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  function checkDuplicate(newName, persons) {
    for (let person of persons) {
      if (newName == person.name) {
        alert(`${newName} is already added to phonebook`);
        return false;
      }
    }
    return true;
  }

  function addNewPerson(e) {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };

    if (checkDuplicate(newName, persons)) {
      let updatedPersons = [...persons, newPerson];
      setPersons(updatedPersons);
      setNewName("");
      setNewNumber("");
    } else {
      setNewName("");
      setNewNumber("");
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter with{" "}
        <FilterInput
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <Heading title="Add new" />
      <AddPersonForm
        onSubmit={addNewPerson}
        nameValue={newName}
        onNameChange={(e) => setNewName(e.target.value)}
        numberValue={newNumber}
        onNumberChange={(e) => setNewNumber(e.target.value)}
      />
      <Heading title="Numbers" />

      {filter === "" ? (
        <RenderList list={persons} />
      ) : (
        <RenderList list={filteredPersons} />
      )}
    </div>
  );
};

export default App;
