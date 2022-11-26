import React from "react";
import styled from 'styled-components';

function Input({props}){
    return <StyledInput type={props.type} 
        value={props.value} 
        name={props.name} 
        placeholder={props.placeholder} 
        onChange={props.onChange} 
    />;
};

const StyledInput = styled.input`
    width: 330px;
    heigth: 56px;
    border-radius: 10px;
    border: 1px solid #51DE9A;
`;


export default Input;
