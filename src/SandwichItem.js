import React from "react";


export default function SandwichItem(props) {

    const {details} = props;
    if (!details){
        return null;
    }
    return <div>
        {details.name}:
        {details.ingredients.map((ingredient, index) =>
            <span key={index}> {ingredient.ingredient.name},</span>)}
    </div>
}