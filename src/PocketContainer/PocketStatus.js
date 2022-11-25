import React, { useContext, useEffect, useState } from "react";
import { addComma } from "../utils/numberUtils";
import { FilterContext } from "./PocketContainer";

const PocketStatus = (props) => {
    const { filteredItems, filterBaseYear } = useContext(FilterContext);

    const [ totalBalance, setTotalBalance ] = useState(0);
    const [ totalIncome, setTotalIncome ] = useState(0);
    const [ totalExpense, setTotalExpense ] = useState(0);
    const twoDigitYear = filterBaseYear.slice(-2);

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
        <div className="pocketStatus">
            <div className="pocketStatusTitle">
                <h1>{twoDigitYear}년 자산 현황</h1>
                <strong className="title">
                    {addComma(totalBalance.toString())} 원
                </strong>
            </div>
        
            <div className="pocketStatusDetail">
                <div className="pocketStatusIncome">
                    <span>수입</span>
                    <strong>{addComma(totalIncome.toString())}</strong>
                </div>
                <div className="pocketStatusExpense">
                    <span>지출</span>
                    <strong>{addComma(totalExpense.toString())}</strong>
                </div>
            </div>
        </div>
    );
}

export default PocketStatus;