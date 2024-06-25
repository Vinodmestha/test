"use client"

import React, { useState } from 'react';
import { Input } from './Input';

const MultiPassenger = () => {
    const [users, setUsers] = useState([{ name: '', email: '', age: '' }]);
    const [errors, setErrors] = useState([{}]);

    // Validate inputs
    const validate = (index, name, value) => {
        let error = '';
        // if (name === "name") {
        //     if (!value) {
        //         error = "field is required"
        //     }
        // }else if(name===""){

        // }
        setErrors([...errors], { [name]: !value ? error = "Field is required" : "" })
        let updateError = [...errors]
        if (!updateError[index]) {
            updateError[index] = {}
        }
        updateError[index][name] = error
        setErrors(updateError)

    };

    // Handle input change
    const handleInputChange = (index, event) => {
        const { value, name } = event.target;
        let updateUsers = [...users]
        updateUsers[index][name] = value
        setUsers(updateUsers)
        validate(index, name, value)
    }

    // Add new user form
    const addUserForm = () => {
        setUsers([...users, { name: '', email: '', age: '' }])
        setErrors([...errors, {}])
    };
    // Remove user form
    const removeUserForm = (index) => {
        let filterUsers = users?.filter((_, i) => i !== index)
        let filterErrors = errors?.filter((_, i) => i !== index)
        setUsers(filterUsers)
        setErrors(filterErrors)
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        let valid = true
        users?.forEach((item, i) => {
            Object.keys(item).forEach((key) => {
                validate(i, key, item[key])
                if (errors[i] && errors[i][key]) {
                    valid = false
                }
            })
        })
        if (valid) {
            console.log("successfully submit")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className=''>
                {users.map((user, index) => (
                    <div key={index} className='flex mb-5'>
                        <div>
                            <label>Name</label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={user.name}
                                onChange={(event) => handleInputChange(index, event)}

                            />
                            {errors[index]?.name && <div style={{ color: 'red' }}>{errors[index].name}</div>}
                        </div>
                        <div>
                            <label>Email</label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                            {errors[index]?.email && <div style={{ color: 'red' }}>{errors[index].email}</div>}
                        </div>
                        <div>
                            <label>Age</label>
                            <Input
                                type="number"
                                name="age"
                                placeholder="Age"
                                value={user.age}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                            {errors[index]?.age && <div style={{ color: 'red' }}>{errors[index].age}</div>}
                        </div>
                        {index >= 1 && <button type="button" onClick={() => removeUserForm(index)} style={{ marginTop: '10px' }}>
                            Remove User
                        </button>}
                    </div>
                ))
                }
            </div>
            {users?.length < 2 && <button type="button" onClick={addUserForm} className='border rounded-lg px-3 py-1'>
                Add User
            </button>}
            <button type="submit" className='bg-red-700 border rounded-lg px-3 py-1'>
                Submit
            </button>
        </form >
    );
};

export default MultiPassenger;
