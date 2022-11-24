import React from "react";
import styled from 'styled-components';

function Input({placeholder, type, value, name}){
    return <StyledInput type={type} value={value} name={name} placeholder={placeholder} />;
};

const StyledInput = styled.input`
    width: 330px;
    heigth: 56px;
    border-radius: 10px;
    border: 1px solid #51DE9A;
`;


export default Input;
