import PocketContainer from "./PocketContainer/PocketContainer";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import './App.css';
import NewItem from "./NewItemContainer/NewItem";
import styled, { ThemeProvider }from "styled-components";
import { light, dark } from "./Theme/Theme";

export const ItemDispatchContext = React.createContext();

function App() {
  const [isAddItem, setAddItem ] = useState(false);
  const [nextItemId, setnextItemId] = useState(0);
  const [items, setItems] = useState([]);
  const [ theme, setTheme ] = useState(light);

  const darkMode = () => {
    theme === light? setTheme(dark) : setTheme(light);
  }

  useEffect(() => {
      const localItems = JSON.parse(localStorage.getItem(items));

      if(localItems === null) {
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
      <ThemeProvider theme={theme}>
        <ItemDispatchContext.Provider value={[memorizedDispatches, memorizedNextItemId]}>
          <Wrapper>
              <ToggleWrapper onClick={darkMode}>{theme === dark ? '🌚' : '🌝'}</ToggleWrapper>
              <PocketContainer items={items} isAddItem={isAddItem} />
              <NewItemWrapper>
                <NewItem />
              </NewItemWrapper>
          </Wrapper>
        </ItemDispatchContext.Provider>
        </ThemeProvider>
    </>
  );
}

const Wrapper = styled.div`
  margin: 5% 40% 5% 40%;
`;

const NewItemWrapper = styled.div`
    background-color: white;
    margin-top: 10%;
    width: 393px;
    margin-bottom: 1%;
    border-radius: 20px;
`;

const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  bottom: 4%;
  right: 3%;
  background-color: ${props => props.theme.backColor};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  box-shadow: ${
    props => props.theme === dark ? '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
    : '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
  }
`;

export default App;
