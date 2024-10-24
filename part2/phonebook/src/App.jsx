import { useState } from "react";
import ShowPeople from "./components/ShowPeople";

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
  const [filteredNames, setFilteredNames] = useState([]);

  function filterNames() {
    setFilteredNames(
      persons.filter((person) => {
        return person.name.toLowerCase().includes(filter.toLowerCase());
      })
    );
  }

  function addName(e) {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    let nameExists = false;
    for (let i = 0; i < persons.length; i++) {
      if (newName === persons[i].name) {
        nameExists = true;
        alert(`${newName} already exists`);
        // break;
      }
    }
    if (!nameExists) {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }

    filterNames();
  }
  function handleNameChange(e) {
    setNewName(e.target.value);
    filterNames();
  }

  function handleNumberChange(e) {
    setNewNumber(e.target.value);
    filterNames();
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with{" "}
          <input
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              filterNames();
              console.log("filtered names:" + JSON.stringify(filteredNames));
            }}
          />
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ShowPeople
        persons={persons}
        filter={filter}
        filteredNames={filteredNames}
      />
      {/* 
      {filteredNames.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))} */}
    </div>
  );
};
export default App;
