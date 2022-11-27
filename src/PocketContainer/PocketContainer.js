import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from 'styled-components';
import Button from "../Button/Button";
import PocketHistory from "./PocketHistory";
import PocketStatus from "./PocketStatus";
import PocketChart from "./PocketChart";
import NewItem from "../NewItemContainer/NewItem";
export const FilterContext = React.createContext();

function PocketContainer(props){

    const initialFilterBaseYear = new Date().getFullYear().toString();
    const [filterBaseYear, setFilterBaseYear] = useState(initialFilterBaseYear);
    
    let filteredItems = [];
    let filteredExpense = [];

    useEffect(() => {
        if(props.isAdditem) {
            let lastedItemId = Math.max(...props.items.map((item) => item.id));
            let lastedItem = props.Item.filter((item) =>  item.id === lastedItemId);
            let lastedFilterBaseYear = lastedItem[0].date.getFullYear.toString();
            setFilterBaseYear(lastedFilterBaseYear);
        }
    },[props.items]);

    if(props.items > 0) {
        filteredItems = props.Items.filter((item) => item.date.getFullYear().toString() === filterBaseYear);
        filteredExpense = filteredItems.filter ((item) => item.amountType === 'expense');   
    }

    const onChangeFilter = useCallback((selectedYear) => {
        setFilterBaseYear(selectedYear);
    }, []);

    const memoizedFilter = useMemo(() => {
        return { onChangeFilter, filteredItems, filterBaseYear, filteredExpense };
    }, [filteredItems, filterBaseYear]);

    return (
        <Wrapper>
            <FilterContext.Provider value={memoizedFilter}>
                <PocketStatus />
                <PocketHistory />
                <NewItem />
            </FilterContext.Provider>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 393px;
    height: 500px;
    background-color: white;
    border-radius: 20px;
    margin: 100px;
`;

export default PocketContainer;
