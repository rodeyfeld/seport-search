import React from "react";
import SearchItem from "./SearchItem";

export default function SearchItems(props) {


    return <ul>
        {props.searchItems.map(searchItem => <li key={searchItem.id}>
            <SearchItem details={searchItem}/>
            <button onClick={() => props.onDeleteClick(searchItem.id)}>Delete</button>
        </li>)}
    </ul>
    ;
}