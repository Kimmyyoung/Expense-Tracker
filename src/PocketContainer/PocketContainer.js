import React from "react";
import styled from 'styled-components';
import Button from "../Button/Button";
import PocketHistory from "./PocketHistory";
import PocketStatus from "./PocketStatus";
export const FilterContext = React.createContext();

function PocketContainer(){
    return (
        <Wrapper>
            <PocketStatus />
            <PocketHistory />
            <Button type="submit" onClick={()=>{}} content="Add Transaction" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 393px;
    height: 500px;
    background-color: grey;
    border-radius: 20px;
    margin: 100px;
`;

export default PocketContainer;
