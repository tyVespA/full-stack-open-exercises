import axios from "axios";
import { useState } from "react";
import personService from "../../services/personService";
import Popup from "./Popup";

export default function Form({ persons, setPersons }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [lastAddedPerson, setLastAddedPerson] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [popupType, setPopupType] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else {
      personService
        .create(personObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
        })
        .catch((error) => {
          console.log(error.response.data.error);
          setErrorMsg(error.response.data.error);
          setPopupType("fail");
        });

      setNewName("");
      setNewNumber("");
      setPopupType("success");
      setLastAddedPerson(personObject.name);
      setTimeout(() => {
        setLastAddedPerson("");
      }, 5000);
    }
  };
  return (
    <div>
      {lastAddedPerson && (
        <Popup name={lastAddedPerson} type={popupType} errorMsg={errorMsg} />
      )}
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}
