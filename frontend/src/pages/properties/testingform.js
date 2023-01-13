import React, { useState } from 'react';

export default function Testingform() {
    const [query, setQuery] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const queryString = new URLSearchParams(query).toString();
        try {
            fetch(`http://localhost:8080/testing3?${queryString}`)
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="param1"
                placeholder="param1"
                value={query.param1}
                onChange={e => setQuery({...query, [e.target.name]: e.target.value})}
            />
            <input
                type="text"
                name="param2"
                placeholder="param2"
                value={query.param2}
                onChange={e => setQuery({...query, [e.target.name]: e.target.value})}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
