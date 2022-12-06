import React from "react";
import styled from 'styled-components';
import NewItemForm from "./NewItemForm";

function NewItemContainer(){    
    return(
        <>
            <Wrapper>
                <Subtitle><span>|</span> Add New Transaction</Subtitle>
                <NewItemForm />
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 393px;
    padding: 1% 0% 1% 0%;
`;

const Subtitle = styled.div`
    height: 50px;
    margin: 5%;
    padding-top: 5%;
    background-color: white;
    font-family: 'ReadexPro-SemiBold';
    font-size: 20px;
    & span{
        color: #51DE9A;
        background-color: white;
    }

`;
export default NewItemContainer;
