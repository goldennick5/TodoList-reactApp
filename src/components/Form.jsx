import React, {useState} from 'react';
import form from './Form.css';

function Form({newPost}) {
    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        newPost(input);
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="input" value={input} onChange={handleChange} placeholder="type here..." />
            <button className="btn">Enter</button>
        </form>
    );
}

export default Form;