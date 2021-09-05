import React, {useState} from "react";
import {render} from "react-dom";
import SandwichSearch from "./SandwichSearch";
import SearchItems from "./SearchItems";
import SandwichItems from "./SandwichItems";
import sandwichData from "./seportSandwiches";

function Index() {
    const [searchItems, setSearchItems] = useState([]);
    const [sandwichItems, setSandwichItems] = useState(sandwichData);
    const [searchTerm, setSearchTerm] = useState("");

    function handleFormSubmit(event){
        event.preventDefault();
        setSearchItems([...searchItems, {
            id: searchItems.length + 1,
            searchTerm: searchTerm
        }], handleSandwichItems);


        setSearchTerm("");
        setSandwichItems(sandwichItems.filter(sandwichItem => {
            sandwichItem.ingredients.forEach(ingredient => {
                searchItems.forEach(searchItem => {
                    return ingredient === searchItem;
                })
            })
        }))
    }

    function handleSandwichItems() {
        setSandwichItems(sandwichItems.filter(sandwichItem => {
            sandwichItem.ingredients.forEach(ingredient => {
                searchItems.forEach(searchItem => {
                    return ingredient === searchItem;
                })
            })
        }))
    }

    function handleSearchTermChange(event){
        setSearchTerm(event.target.value);
    }

    function handleSearchItemDeleteClick(id){
        setSearchItems(searchItems.filter(searchItem => searchItem.id !== id))
    }

    return (
        <div>
            <SandwichSearch onFormSubmit={handleFormSubmit} onSearchTermChange={handleSearchTermChange} searchTerm={searchTerm} />
            <SearchItems searchItems={searchItems} onDeleteClick={handleSearchItemDeleteClick} />
            <SandwichItems sandwichItems={sandwichItems} />
        </div>
    )
}

render(<Index />, document.querySelector("#react-root"));  