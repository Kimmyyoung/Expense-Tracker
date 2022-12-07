import React from "react";
import styled from 'styled-components';

const DateLabel = (props) => {
 
    const year = props.date.getFullYear();
    const month = ("00" + (props.date.getMonth() + 1)).slice(-2);
    const day = ("00" + props.date.getDate()).slice(-2);

    return (
        <Wrapper>
            {year}-{month}-{day}
        </Wrapper>
    )
}

const Wrapper = styled.span`
    font-family: 'ReadexPro-Regular';
    font-size: 14px;
    background-color: white;
    letter-spacing: 0.1px;
    color: #979797;
`;

export default DateLabel;

