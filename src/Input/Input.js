import React from "react";
import styled from 'styled-components';

function Input({type, value, name, placeholder, onChange}){
    return <StyledInput 
        type={type} 
        value={value} 
        name={name} 
        placeholder={placeholder} 
        onChange={onChange} 
    />;
};

const StyledInput = styled.input`
    width: 330px;
    heigth: 56px;
    border-radius: 10px;
    border: 1px solid #51DE9A;
`;


export default Input;
