import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from 'styled-components';
import PocketHistory from "./PocketHistory";
import PocketStatus from "./PocketStatus";
import PocketChart from "./PocketChart";

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

    if (props.items?.length > 0) {
        filteredItems = props.items.filter(
          (item) => item.date.getFullYear().toString() === filterBaseYear
        );
    
        filteredExpense = filteredItems.filter(
          (item) => item.amountType === "expense"
        );
      }

    const onChangeFilter = useCallback((selectedYear) => {
        setFilterBaseYear(selectedYear);
    }, []);

    const memoizedFilter = useMemo(() => {
        return { onChangeFilter, filteredItems, filterBaseYear, filteredExpense };
    }, [filteredItems, filterBaseYear]);

    return (
        <>
        <Wrapper>
            <FilterContext.Provider value={memoizedFilter}>
                <PocketStatus />
                <PocketHistory />
                <PocketChart />
            </FilterContext.Provider>
        </Wrapper>
        </>
        
    );
}

const Wrapper = styled.div`
    width: 393px;
    background-color: white;
    border-radius: 20px;
    height: max-content;
`;

export default PocketContainer;
