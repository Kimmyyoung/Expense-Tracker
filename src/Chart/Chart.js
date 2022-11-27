import React from "react";
import ChartBar from "./ChartBar";

import { FilterContext } from "../PocketContainer/PocketContainer";

const Chart = (props) => {
    const amountOfChartDatas = props.chartDatas.map((data) => data.amount);
    const maximumAmountOfChartDatas = Math.max(...amountOfChartDatas);
    
    return (
        <div aria-label={+"년의 월별 지출"}>
            {props.chartDatas.map((expense) => (
                <ChartBar
                key={expense.label}
                label={expense.label}
                amount={expense.amount}
                maximumAmount={maximumAmountOfChartDatas}
        />
      ))}
        </div>
    )
}

export default Chart;
