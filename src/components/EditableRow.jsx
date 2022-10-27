const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input 
                type="text" 
                required 
                placeholder="Enter a name" 
                name="fullName"
                value={editFormData.fullName}
                onChange={handleEditFormChange} 
                />
            </td>
            <td>
                <input 
                type="text" 
                required 
                placeholder="Enter a address" 
                name="address"
                value={editFormData.address}
                onChange={handleEditFormChange} 

                />
            </td>
            <td>
                <input 
                type="text" 
                required 
                placeholder="Enter a phone number" 
                name="phoneNumber"
                value={editFormData.phoneNumber}
                onChange={handleEditFormChange} 

                />
            </td>
            <td>
                <input 
                type="text" 
                required 
                placeholder="Enter a email" 
                name="email"
                value={editFormData.email}
                onChange={handleEditFormChange} 

                />
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>

            </td>

        </tr>
    )
}

export default EditableRow;