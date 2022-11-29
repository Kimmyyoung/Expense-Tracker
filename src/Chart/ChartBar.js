import React, { useState } from "react";
import styled from "styled-components";
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
    };

    const hideAmountHandler = () => {
        setIsShowAmount(false);
    };

    return (
        <CharBar aria-label={`${year}년 ${month}월 지출 금액`}>
            <ChartBarInner>
                <ChartBarFill style={{height: fillHeight, borderRadius: fillbarStyle }} 
                onMouseOver={showAmountHandler} 
                onMouseOut={hideAmountHandler}>
                    {isshowamount && (
                        <CharBarExpense>{amount}</CharBarExpense>
                    )}
                </ChartBarFill>
            </ChartBarInner>
            <p>{month}월</p>
        </CharBar>
        
    )
}

const CharBar = styled.div`
    font-family: 'ReadexPro-Regular';
    background-color: white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
 
  & p {
    font-size: 12px;
    font-family: 'ReadexPro-Regular';
    background-color: white;
  }
`;

const ChartBarInner = styled.div`
    font-family: 'ReadexPro-Regular';
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;
     width: 17px;
     height: 156px;
     margin-bottom: 4px;
     border-radius: 5px;
     background-color: #F2F2F2;
`;

const ChartBarFill = styled.div`
    background-color: white;
    font-family: 'ReadexPro-Regular';
    position: relative;
    width: 100%;
     height: 0%;
      border-radius: 0 0 5px 5px;
  background-color: #51DE9A;
  transition: all 300ms ease-out;
`;


const CharBarExpense = styled.div`
  z-index: 2;
  position: absolute;
  top: -30px;
  left: -20px;
  width: 60px;
  text-align: center;
  color: #51DE9A;
  border-radius: 5px;
  background-color: #FFF;
  box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
  overflow: hidden;
`;

export default ChartBar;