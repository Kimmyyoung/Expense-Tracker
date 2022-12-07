import React from "react";
import Filter from "../Components/Filter/Filter";
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
    color: ${prop => prop.theme.textColor};
        background-color: ${prop => prop.theme.backColor};
`;

const SubtitleContainer = styled.div`
    color: ${prop => prop.theme.textColor};
    background-color: ${prop => prop.theme.backColor};
    height: 35px;
    display: flex;
    flex-direction: row;

`;

const Subtitle = styled.h2`
    color: ${prop => prop.theme.textColor};
    background-color: ${prop => prop.theme.backColor};
    font-family: 'ReadexPro-SemiBold';
    font-size: 20px;
    margin: 0px;
    width: 50%;
    padding-left: 10%;
    padding-top: 1%;
    
    & span{
        color: #51DE9A;
        background-color: ${prop => prop.theme.backColor};
    }
`;

const StyledFilter = styled.div`
    color: ${prop => prop.theme.textColor};
    background-color: ${prop => prop.theme.backColor};
    width: 50%;
    padding-left: 30%;
    padding-top: 2%;
`;


export default PocketHistory;