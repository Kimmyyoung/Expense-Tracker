import PocketContainer from "./PocketContainer/PocketContainer";
import NewItem from "./NewItemContainer/NewItemContainer";
import React from "react";
import './App.css';

export const ItemDispatchContext = React.createContext();

function App() {
  return (
    <>  
        <PocketContainer />
    </>
  );
}


export default App;
