import React from "react";

export default function SandwichSearch(props){

    return <form onSubmit={props.onFormSubmit}>
            <div className="sandwich-search-container">
                <label htmlFor="search">Enter ingredient name!</label>
                <input type="text" name="search" value={props.searchTerm} onChange={props.onSearchTermChange}/>
                <input type="submit" value="Submit" />
            </div>
        </form>
}