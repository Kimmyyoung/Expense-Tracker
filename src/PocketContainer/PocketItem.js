import React, { useContext } from "react";
import { FilterContext } from "./PocketContainer";
import Item from '../Components/Item/Item.js';
import styled from 'styled-components';
import { dark } from "../Theme/Theme";
const PocketItem = ()=>{
    const { filteredItems } = useContext(FilterContext);

    if(filteredItems.length === 0) {
        return (
            <Wrapper>
                <span className="notransaction" style={{display: "block", textAlign: "center"}}>
                    No Transaction 🙅‍♀️
                </span>
            </Wrapper>
        );
    }

        const copyFilterItems = [...filteredItems];
        const sortedFilteredItems = copyFilterItems.sort((a,b) => {
            if(new Date(a.date).getTime() === new Date(b.date).getTime()) {
                return b.id - a.id;
            }
            return new Date(b.date) - new Date(a.date);
        });

        return (
            <>
            <Wrapper>
                {sortedFilteredItems.map((item)=>{
                    return ( 
                        <Item 
                        key={item.id} 
                        id={item.id} 
                        date={item.date} 
                        title={item.title} 
                        amount={item.amount} 
                        amountType={item.amountType} />
                    )
                })}
            </Wrapper>
            </>
            
        )
 
}

const Wrapper = styled.div`
    font-family: 'ReadexPro-Regular';
    color: black;
    background-color: ${prop => prop.theme.backColor};
    margin: 3%;
    
    & span {
        margin: 10%;
        font-family: 'ReadexPro-Regular';
    }

    & .notransaction {
        background-color: ${prop => prop.theme === dark? prop.theme.backColor : 'white'};
        color: ${prop => prop.theme === dark? prop.theme.textColor : 'black'}
    }
`;

export default PocketItem;