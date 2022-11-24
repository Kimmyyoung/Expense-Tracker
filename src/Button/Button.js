import React from "react";
import styled from 'styled-components';


function Button({type, content, onClick}){
    return <StyledButton type={type} onClick={onClick}>{content}</StyledButton>;
};


const StyledButton = styled.button`
    cursor: pointer;
    width: 338px;
    height: 56px;
    border-radius: 20px;
    border: 0px;
    background-color: #51DE9A;
    color: white;
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
`;

export default Button;
