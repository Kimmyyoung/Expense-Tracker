import React from "react";
import styled from 'styled-components';
import NewItemForm from "./NewItemForm";

function NewItemContainer(){    
    return(
        <>
        <Wrapper>
            <NewItemForm />
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    background: lightyellow;
`;
export default NewItemContainer;
