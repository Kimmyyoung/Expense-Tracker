import React from "react";
import Filter from "../Filter/Filter";
import PocketItem from "./PocketItem";
import styled from 'styled-components';

const PocketHistory = (props)=>{
   return (
        <Wrapper>
            <SubtitleContainer>
                <Subtitle>| History</Subtitle>
                <Filter />
            </SubtitleContainer>
            <PocketItem />
        </Wrapper>
   )
}

const Wrapper = styled.div`
    background-color: white;
`;
const SubtitleContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-around;
`;
const Subtitle = styled.h2`
    background-color: white;
    font-family: 'ReadexPro-SemiBold';
`;

export default PocketHistory;