import React, { useContext, useEffect, useState } from "react";
import { addComma } from "../utils/numberUtils";
import { FilterContext } from "./PocketContainer";
import styled from 'styled-components';

const PocketStatus = (props) => {
    const { filteredItems, filterBaseYear } = useContext(FilterContext);

    const [ totalBalance, setTotalBalance ] = useState(0);
    const [ totalIncome, setTotalIncome ] = useState(0);
    const [ totalExpense, setTotalExpense ] = useState(0);

    useEffect(() => {
        let total = {balance: 0, income: 0, expense: 0};

        if(filteredItems.length > 0) {
            filteredItems.forEach((item) => {
                if(item.amountType === 'income') {
                    total.balance += +item.amount;
                    total.income += +item.amount;
                }else {
                    total.balance -= -item.amount;
                    total.expense += +item.amount;
                }
            });
        }

        setTotalBalance(total.balance);
        setTotalIncome(total.income);
        setTotalExpense(total.expense);
    },[filteredItems]);
    
    return (
        <Wrapper>
            <PocketStatusTitle>
                <h1>Overall Balance</h1>
                <strong className="title">
                    ${addComma(totalBalance.toString())}
                </strong>
            </PocketStatusTitle>
        
            <PocketStatusDetail>
                <PocketStatusDetailSubtitle>
                    <span>Income</span>
                    <strong>${addComma(totalIncome.toString())}</strong>
                </PocketStatusDetailSubtitle>
                <PocketStatusDetailSubtitle>
                    <span>Expense</span>
                    <strong>${addComma(totalExpense.toString())}</strong>
                </PocketStatusDetailSubtitle>
            </PocketStatusDetail>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border-radius: 20px;
    background-color: white;
    padding-top: 10%;
    background-color: ${prop => prop.theme.backColor};
    color: ${prop => prop.theme.textColor};
`;

const PocketStatusTitle = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 90%;
    margin-bottom: 10%;
    background-color: ${prop => prop.theme.backColor};
    color: ${prop => prop.theme.textColor};
    padding-left: 10%;


    & h1{
        font-family: 'ReadexPro-Regular';
        font-weight: 400;
        font-size: 16px;
        color: ${prop => prop.theme.subtitleColor};
        background-color: ${prop => prop.theme.backColor};
    }
    strong {
        font-family: 'ReadexPro-Regular';
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: ${prop => prop.theme.textColor};
        background-color: ${prop => prop.theme.backColor};
    }
`;

const PocketStatusDetail = styled.div`
    background-color: ${prop => prop.theme.backColor};
    color: ${prop => prop.theme.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
`;

const PocketStatusDetailSubtitle = styled.div`
    background-color: ${prop => prop.theme.backColor};
    color: ${prop => prop.theme.textColor};
    display: flex;
    flex-direction : column;
    padding: 15px 0;
     width: 50%;
     padding-left:10%;

    & span {
        font-family: 'ReadexPro-Regular';
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${prop => prop.theme.subtitleColor};
        background-color: ${prop => prop.theme.backColor};
    }
    & strong {
        font-family: 'ReadexPro-Regular';
        font-weight: 500;
        font-size: 30px;
        line-height: 38px;
        color: ${prop => prop.theme.textColor};
        background-color: ${prop => prop.theme.backColor};
    }
`;
export default PocketStatus;