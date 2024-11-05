import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

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
    const newPerson = { name: newName };

    if (checkDuplicate(newName, persons)) {
      let updatedPersons = [...persons, newPerson];
      setPersons(updatedPersons);
      setNewName("");
    } else {
      setNewName("");
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
