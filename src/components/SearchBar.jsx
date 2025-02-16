import { useState } from "react";

import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div className="search-bar container">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="search">Enter Search Term</label>
                <input id="search" className="form-control" value={term} type="text" onChange={handleChange}/>
            </form>
            <button type='submit' className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </div> 
    )
}

export default SearchBar;