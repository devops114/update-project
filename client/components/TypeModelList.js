
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TypeModelList = () => {
    const [typeModels, setTypeModels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/type-model');
                setTypeModels(response.data);
            } catch (error) {
                alert('Error fetching Type Models');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Type Models</h2>
            <ul>
                {typeModels.map((type) => (
                    <li key={type._id}>{type.name}: {type.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default TypeModelList;

