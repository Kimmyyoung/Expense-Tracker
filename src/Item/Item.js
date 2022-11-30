import React, { useCallback, useContext, useState } from "react";
import styled from 'styled-components';
import { ItemDispatchContext } from "../App";
import DateLabel from "./DateLabel.js";

const Item = (props) => {
    const [{ onRemove }] = useContext(ItemDispatchContext);

    const [isItemClick, setIsItemClick] = useState(false);
    const [itemClickCount, setItemClickCount] = useState(0);
  
    const itemStyleByAmountType = "item " + props.amountType;
    let fontStyleByAmountType = "green";
  
    const itemCategory = props.title;
    let itemAmount = "+" + props.amount;
  
    if (props.amountType === "expense") {
      fontStyleByAmountType = fontStyleByAmountType.replace("green", "red");
      itemAmount = itemAmount.replace("+", "-");
    }
  
    const itemClickHandler = useCallback(() => {
      if (itemClickCount % 2 === 0) {
        setIsItemClick(true);
      } else {
        setIsItemClick(false);
      }
  
      setItemClickCount((prevClickCount) => prevClickCount + 1);
    }, [itemClickCount]);
  
    const handleRemove = (event) => {
      event.stopPropagation(); // 이벤트 버블링 막기
  
      onRemove(props.id);
    };

    return (
        <>
        <ItemStyledContainer className={itemStyleByAmountType} onClick={itemClickHandler}>
            <ItemDetail>
                <DateLabel date={props.date}/>

                <ItemTitle>
                    <DeleteButton style={{display: isItemClick === true? "flex" : "none"}} onClick={handleRemove} >
                        <span>Delete Item</span>
                    </DeleteButton>
                    <h3>{itemCategory}</h3>
                </ItemTitle>
            </ItemDetail>
            <div>
                <strong className={fontStyleByAmountType}>{itemAmount}</strong>
            </div>
        </ItemStyledContainer>
        </>
    );
};


const ItemStyledContainer = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 341px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px 14px;
    margin-bottom: 20px;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
    cursor: pointer;

    & .income {
        border-right: 5px solid #5ADB5A;
        background-color: white;
    }
    & .expense {
     border-right: 5px solid #FF5B5B;
     background-color: white;
    }
    & strong {
        flex-grow: 1;
        text-align: end;
        background-color: white;
    }
    & .green {
        font-color: green;
    }
    & .red {
        font-color: red;
    }
`;

const ItemTitle = styled.div`
    background-color: white;
    display: flex;
    font-family: 'ReadexPro-Regular';
    justify-content: center;
    align-items: center;
    margin-left: 10%;
    & h3 {
        background-color: white;
        width: 200px;
        margin-bottom: 4px;
    }

`;

const DeleteButton = styled.button`
    background-color: white;
    display: none;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  padding: 0;
  margin: 0 5px 4px 0;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
  & ::before {
  content: 'X';
  background-color: white;
}
`;

const ItemDetail = styled.div`
    background-color: white;
    font-family: 'ReadexPro-Regular';
`;
export default Item;


