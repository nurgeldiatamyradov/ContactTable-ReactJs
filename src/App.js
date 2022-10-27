import React, { useState, Fragment } from "react";
import JustTableRow from "./components/JustTableRow";
import EditableRow from "./components/EditableRow"
import {nanoid} from 'nanoid'
import './App.css'
import data from "./mock-data.json"



function App() {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName:'',
    address: '',
    phoneNumber: '',
    email:''
  })

  const [editFormData, setEditFormData] = useState({
    fullName:'',
    address: '',
    phoneNumber: '',
    email:''
  })

  const [editContactId, setEditContactId] = useState(null)



  const handleChange = (e) =>{
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute("name")
    const fieldValue = e.target.value

    const newFormData = {...editFormData}
    newFormData[fieldName] = fieldValue
    setEditFormData(newFormData)
  }

  const handleSubmit = (e) =>  {
    e.preventDefault()

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    }
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  const handleFormEditSubmit = (e) => {
     e.preventDefault()

     const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
     }

     const newContacts = {...contacts}

     const index = contacts.findIndex((contact) => contact.id === editContactId)
     newContacts[index] = editedContact

     setContacts(newContacts)
     setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id)

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email

    }

    setEditFormData(formValues)

  }
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
 
  return (
    <div className="app-container">
      <form onSubmit={handleFormEditSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=> (
            <Fragment >
              {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    key={contact.id}
                  />
                ) : (
                  <JustTableRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    key={contact.id}

                  />
                )}
            
         </Fragment>
          ))}

        </tbody>
      </table>
      </form>
      <h2>Add a Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="fullName"
         required
         placeholder="Enter a name..."
         onChange={handleChange}

        />
        <input
         type="text"
         name="adress"
         required
         placeholder="Enter a adress..."
         onChange={handleChange}

        />
        <input
         type="text"
         name="phoneNumber"
         required
         placeholder="Enter a phone number..."
         onChange={handleChange}

        />
        <input
         type="text"
         name="email"
         required
         placeholder="Enter a email..."
         onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
