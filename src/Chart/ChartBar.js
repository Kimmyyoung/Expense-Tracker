import React, { useState } from "react";
import { addComma } from "../utils/numberUtils";

const ChartBar = (props) => {
    const [ isshowamount, setIsShowAmount ] = useState(false);
    const fillbarStyle = props.amount === props.maximumAmount ? "5px" : "";
    const year = props.year;
    const month = props.label;
    const amount = addComma(props.amount.toString());

    let fillHeight = "0%";

    if(props.maximumAmount > 0) {
        fillHeight = Math.round((props.amount / props.maximumAmount) * 100) + "%";
    } 

    const showAmountHandler = () =>{
        setIsShowAmount(true);
    }

    const hideAmountHandler = () => {
        setIsShowAmount(false);
    }

    return (
        <div aria-label={`${year}년 ${month}월 지출 금액`}>
            <div>
                <div onMouseOver={showAmountHandler} onMoushOut={hideAmountHandler}>
                    {isshowamount && (
                        <div>{amount}</div>
                    )}
                </div>
                <strong>{month}월</strong>
            </div>
        </div>
    )
}

export default ChartBar;