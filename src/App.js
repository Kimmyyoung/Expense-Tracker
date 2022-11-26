import PocketContainer from "./PocketContainer/PocketContainer";
import NewItem from "./NewItemContainer/NewItemContainer";
import styled from "styled-components";
import React from "react";

export const ItemDispatchContext = React.createContext();

function App() {
  return (
    <>
        <PocketContainer />
        <NewItem />
    </>
  );
}


export default App;
