import React from "react";
import Chart from "../Chart/Chart";
import { FilterContext } from "./PocketContainer";

const PocketChart = () => {
    const monthlyExpenseData = [
        {label: '1', amount:0},
        {label: '2', amount:0},
        { label: "3", amount: 0 },
        { label: "4", amount: 0 },
        { label: "5", amount: 0 },
        { label: "6", amount: 0 },
        { label: "7", amount: 0 },
        { label: "8", amount: 0 },
        { label: "9", amount: 0 },
        { label: "10", amount: 0 },
        { label: "11", amount: 0 },
        { label: "12", amount: 0 },
    ];

    // const filteredExpenses = 0;

    // filteredExpenses.forEach((e)=>{
    //     const month = e.date.getMonth();
    //     monthlyExpenseData[month].amount += +e.amount;
    // });

    return (
        <div>
            <h2>월 별 지출 내역</h2>
            <Chart /> 
        </div>
    )
}

export default PocketChart;