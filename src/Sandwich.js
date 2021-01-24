import React from "react";

export default function Sandwich(props){

    const {name, price, description} = props.details;
    console.log(props.details);

    return <>
        <div>
            <div className="sandwich-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    </>

}