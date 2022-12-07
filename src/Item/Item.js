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

    const categorydata = [
        { id: 1, src: '../Img/shopping.jpg', value:'Shopping'},
        { id: 2, src: '../Img/movie.jpg', value:'Movie'},
        { id: 3, src: '../Img/app.jpg', value:'App'},
        { id: 4, src: '../Img/transfer.jpg', value:'Transfer'},
        { id: 5, src: '../Img/etc.jpg', value:'etc'}
    ];

  
    let CategoryImageUrl = '';

    if(itemCategory == 'Shopping') {CategoryImageUrl = categorydata[0].src;}
    else if(itemCategory == 'Movie') {CategoryImageUrl = categorydata[1].src;}
    else if(itemCategory == 'App') {CategoryImageUrl = categorydata[2].src;}
    else if(itemCategory == 'Transfer') {CategoryImageUrl = categorydata[3].src;}
    else {CategoryImageUrl = categorydata[4].src;}
    return (
        <>
        <ItemStyledContainer className={itemStyleByAmountType} onClick={itemClickHandler}>
                <ItemDetail>
                    <ItemCategoryImage>
                       <img src={CategoryImageUrl} />
                    </ItemCategoryImage>
                    <ItemTitle>
                            <ItemDetailCategory>{itemCategory}</ItemDetailCategory>
                            <DateLabel date={props.date}/>
                    </ItemTitle>
                    <ItemTitleAmount>
                        <strong className={fontStyleByAmountType}>{itemAmount}</strong>
                        <DeleteButton style={{display: isItemClick === true? "flex" : "none"}} onClick={handleRemove} >
                                <span>Delete</span>
                        </DeleteButton>
                    </ItemTitleAmount>
                </ItemDetail>
        </ItemStyledContainer>
        </>
    );
};


const ItemStyledContainer = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 330px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px 14px 15px;    
    margin : 10px;
    filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25));
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

const ItemTitle = styled.tr`
    background-color: white;
    font-family: 'ReadexPro-Regular';
    margin-left: 10%;
    display:table-cell;
    width:40%;
    vertical-align:middle;
    & h3 {
        background-color: white;
        font-family: 'ReadexPro-Regular';
    }
`;
const ItemCategoryImage = styled.tr`
    background-color: white;
    & img{
        border-radius: 10px;    
        vertical-align:middle;
        margin-left: 10%;
    }

    font-family: 'ReadexPro-Regular';
    border-radius: 10px;
    display:table-cell;
    width:15%;
    vertical-align:middle;
`;

const ItemTitleAmount =styled.tr`
    background-color: white;
    font-family: 'ReadexPro-Regular';
    margin-left: 10%;
    display:table-cell;
    width:15%;
    vertical-align:middle;
    & strong {
        font-family: 'ReadexPro-Regular';
        font-size: 25px;
        margin-left: 20%;
    }
    & .green {
        color: #51DE9A; 
    }
    & .red {
        color: #DE5151;
    }
`;


const DeleteButton = styled.button`
    background-color: white;
    display: none;
    height: 17px;
    margin-left: 18%;
    color: #DE5151;
    padding: 0;
    letter-spacing: 0;
    cursor: pointer;
    font-family: 'ReadexPro-Regular';
    font-size: 10px;
    border:none;
    & ::before {
    content: 'X';
    background-color: white;
    }
`;

const ItemDetail = styled.table`
    background-color: white;
    font-family: 'ReadexPro-Regular';
    display: table;
    width: 100%;    
`;

const ItemDetailCategory = styled.table`
    background-color: white;
    font-family: 'ReadexPro-Regular';
    display: table;
    width: 100%;   
    padding-left: 10%;
    font-size: 20px;
`;
export default Item;


