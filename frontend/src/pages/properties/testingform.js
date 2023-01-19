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


    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ];

      const oranges = [
        { value: 'option1', label: 'Orange' },
        { value: 'option2', label: 'Mandarin' },
        { value: 'option3', label: 'Tangerine' }
      ];
      
     

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

            <select>
                {oranges.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select>


            <button type="submit">Submit</button>
        </form>
    );
}
