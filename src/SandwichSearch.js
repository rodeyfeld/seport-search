import React, {useState} from "react";
import Sandwich from "./Sandwich.js"

export default function SandwichSearch(){

    const [search, setSearch] = useState("None")

    function handleSearchUpdate(){
        setSearch(search)
    }

    return <>
        <div className="sandwich-search-container">
            <label for="search">Enter ingredient name</label>
            <input type="search" name="search" onChange={handleSearchUpdate} />
        </div>
    </>


}