import React from "react";
import styled from 'styled-components';

const DateLabel = (props) => {
    const dt = new Date(props);
    
    const year = dt.getFullYear();
    console.log(year);
    const month = ("00" + (dt.getMonth() + 1)).slice(-2);
    const day = ("00" + dt.getDate()).slice(-2);

    return (
        <Wrapper>
            {year}-{month}-{day}
        </Wrapper>
    )
}

const Wrapper = styled.span`
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.1px;
    color: #979797;
`;

export default DateLabel;
