import React from "react";
import Filter from "../Filter/Filter";
import PocketItem from "./PocketItem";
import styled from 'styled-components';

const PocketHistory = (props)=>{
   return (
        <Wrapper>
            <SubtitleContainer>
                <Subtitle><span>|</span> History</Subtitle>
                <StyledFilter><Filter /></StyledFilter>
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
    height: 35px;
    display: flex;
    flex-direction: row;

`;

const Subtitle = styled.h2`
    background-color: white;
    font-family: 'ReadexPro-SemiBold';
    font-size: 20px;
    margin: 0px;
    width: 50%;
    padding-left: 10%;
    padding-top: 1%;
    
    & span{
        color: #51DE9A;
        background-color: white;
    }
`;

const StyledFilter = styled.div`
    background-color: white;
    width: 50%;
    padding-left: 30%;
    padding-top: 2%;
`;


export default PocketHistory;