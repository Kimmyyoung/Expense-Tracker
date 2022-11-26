import React, { useContext } from "react";
import { FilterContext } from "./PocketContainer";
import Item from "../Item/Item";

const PocketItem = ()=>{
    const { filteredItems } = useContext(FilterContext);

    if(filteredItems.length === 0) {
        return (
            <div>
                <span style={{display: "block", textAlign: "center"}}>
                    입력된 데이터가 없어요
                </span>
            </div>
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
        <div>
            {sortedFilteredItems.map((item) => {
                <Item key={item.key} id={item.id} date={item.date} title={item.title} amount={item.amount} amountType={item.amountType} />
            })}
        </div>
    )
}

export default PocketItem;