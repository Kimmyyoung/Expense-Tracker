import React from "react";
import Chart from "../Chart/Chart";

const PocketChart = () => {

    const monthlyExpenseData = [
        {label: '1', amount:5},
        {label: '2', amount:6},
        { label: "3", amount: 9 },
        { label: "4", amount: 10 },
        { label: "5", amount: 0 },
        { label: "6", amount: 0 },
        { label: "7", amount: 0 },
        { label: "8", amount: 0 },
        { label: "9", amount: 0 },
        { label: "10", amount: 0 },
        { label: "11", amount: 0 },
        { label: "12", amount: 0 },
    ];

    

    return (
        <div>
            <Chart chartDates={monthlyExpenseData} /> 
        </div>
    )
}

export default PocketChart;