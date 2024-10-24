import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  function addName(e) {
    e.preventDefault();
    const personObject = {
      name: newName,
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
    }
  }

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
          <div>debug: {newName}</div>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
