import React from "react";
import styled from 'styled-components';
import { addComma } from "../utils/numberUtils";
import DateLabel from "./DateLabel";

function Item(props) {
    const itemTitle = props.title;
    // let itemAmount = "+" + addComma(props.amount.toString());



    return (
        <div onClick={()=>{}}>
            <div>
                <h3>{itemTitle}</h3>
                <DateLabel date={props.date}/>
            </div>
            <div>
                <strong></strong>
            </div>
        </div>
    )
}

export default Item;
