import React, { useContext } from "react";
import { FilterContext } from "./PocketContainer";
import Item from "../Item/Item";
import styled from 'styled-components';

const PocketItem = ()=>{
    const { filteredItems } = useContext(FilterContext);

    if(filteredItems.length === 0) {
        return (
            <Wrapper>
                <span style={{display: "block", textAlign: "center"}}>
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
        <Wrapper>
            {sortedFilteredItems.map((item) => {
                <Item key={item.key} id={item.id} date={item.date} title={item.title} amount={item.amount} amountType={item.amountType} />
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'ReadexPro-Regular';
    background-color: white;
    & span {
        background-color: white;
        margin: 10%;
    }
`;

export default PocketItem;