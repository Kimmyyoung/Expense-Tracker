import React, { useState } from "react";
import styled from 'styled-components';
import Button from "../Button/Button";
import Input from "../Input/Input";

function NewItemContainer(){
    const [ amount, setAmount ] = useState();
    
    return(
        <>
        <Wrapper>
            <Input placeholder='$10' type='text' value={amount} name="amount" /> <br/>
            <Button type="submit" onClick={()=>{}} content="Continue" />
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    background: lightyellow;
`;
export default NewItemContainer;
