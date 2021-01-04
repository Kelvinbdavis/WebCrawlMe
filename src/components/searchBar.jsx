import React, { useState } from "react";
const axios = require('axios')
import fetchData from '../api/fetch'
const SearchBar = (props) => {
    const [input, setInput] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetchData(input).then((res) => {
            console.log(res)
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="input-group">
                        <input className="form-control border-secondary py-2" type="search"
                            value={input}
                            placeholder={"search person"}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <form className="input-group-append"
                            onSubmit={handleSubmit} >
                            <button className="btn btn-outline-secondary" type="submit">
                                <i className="fa fa-search" />Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SearchBar;