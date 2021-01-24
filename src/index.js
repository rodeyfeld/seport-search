import React from "react";
import {render} from "react-dom";
import SandwichList from "./SandwichList.js"
import SandwichSearch from "./SandwichSearch"

function Index() {
  return (
      <>
        <SandwichSearch />
        <SandwichList />
      </>
  )
}

render(<Index />, document.querySelector("#react-root"));