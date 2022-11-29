import React from "react";
import styled from "styled-components";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const amountOfChartDatas = props.chartDates.map((data) => (data.amount));

    
    const maximumAmountOfChartDatas = Math.max(...amountOfChartDatas);
    
    return (
        <Wrapper>
            {props.chartDates.map((expense) => (
                <ChartBar
                key={expense.label}
                label={expense.label}
                amount={expense.amount}
                maximumAmount={maximumAmountOfChartDatas}
        />
      ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px;
`;
export default Chart;
