import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123123123" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
    if (nameExists == false) {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  }

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleNumberChange(e) {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <div>
        {persons.map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
