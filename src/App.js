import PocketContainer from "./PocketContainer/PocketContainer";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import './App.css';
import NewItem from "./NewItemContainer/NewItem";
import styled from "styled-components";
export const ItemDispatchContext = React.createContext();

function App() {
  const [isAddItem, setAddItem ] = useState(false);
  const [nextItemId, setnextItemId] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("items"));

    if (localItems === null) {
      localStorage.setItem("items", JSON.stringify(items));
      localStorage.setItem("nextItemId", nextItemId);

      return;
    }

    const localNextItemId = +localStorage.getItem("nextItemId");
    let copyLocalItems = [...localItems];

    copyLocalItems.forEach((item, index) => {
      copyLocalItems[index].date = new Date(item.date);
    });

    setItems(copyLocalItems);
    setnextItemId(localNextItemId);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("nextItemId", nextItemId);
  },[items]);

  const onAdd = useCallback((addItemData) => {
    setnextItemId((nextItemId) => nextItemId + 1);
    setAddItem(true);
    setItems((prevItems) => [...prevItems, addItemData]);
  },[]);

  const onRemove = useCallback((deleteItemData) => {
    setAddItem(false);
    setItems((items) => {[...items].filter((item) => item.id !== deleteItemData)})
  },[]);

  const memorizedDispatches = useMemo(() => {
    return { onAdd, onRemove };
  },[]);

  const memorizedNextItemId = useMemo(() => {
    return {nextItemId};
  },[nextItemId]);




  return (
    <>  
     <ItemDispatchContext.Provider value={[memorizedDispatches, memorizedNextItemId]}>
        <PocketContainer items={items} isAddItem={isAddItem} />
        <NewItemWrapper>
           <NewItem />
        </NewItemWrapper>
      </ItemDispatchContext.Provider>
    </>
  );
}



const NewItemWrapper = styled.div`
    background-color: white;
    margin-top: 1%;
    width: 393px;
    margin-bottom: 1%;
    border-radius: 20px;
`;

export default App;
