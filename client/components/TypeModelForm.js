
import React, { useState } from 'react';
import axios from 'axios';

const TypeModelForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/type-model', { name, description });
            alert('Type Model added successfully!');
        } catch (error) {
            alert('Error adding Type Model');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TypeModelForm;

