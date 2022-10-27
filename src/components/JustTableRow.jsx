const JustTableRow = ({ contact, handleEditClick, handleDeleteClick }) => {
return (
    <tr>
                      <td>{contact.fullName}</td>
                      <td>{contact.address}</td>
                      <td>{contact.phoneNumber}</td>
                      <td>{contact.email}</td>
                      <td>
                        <button type="button" onClick={(e)=> handleEditClick(e, contact) }>Edit</button>
                        <button type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button>

                      </td>
                    </tr>
)
}

export default JustTableRow