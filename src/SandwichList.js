import React from "react";
import Sandwich from "./Sandwich.js"
import seportSandwiches from "./seportSandwiches";

export default function SandwichList(){

    const sandwiches = seportSandwiches;

    return <div>
        {
            sandwiches.map((sandwich, i) =>
                <Sandwich details={sandwich} />
            )
        }
        </div>


}