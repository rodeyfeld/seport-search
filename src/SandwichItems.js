import React from "react";
import SandwichItem from "./SandwichItem";

export default function SandwichItems(props) {


    return <ul>
        {props.sandwichItems.map((sandwichItem, index) => <li key={index}>
            <SandwichItem details={sandwichItem}/>
        </li>)}
    </ul>
    ;
}