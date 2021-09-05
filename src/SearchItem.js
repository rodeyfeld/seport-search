import React from "react";


export default function SearchItem(props) {

    const {details} = props;
    if (!details){
        return null;
    }
    return <span>{details.searchTerm}</span>
}