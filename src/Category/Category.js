import React from "react";
import styled from "styled-components";

const Category = (props) => {
    const { id, src, value, title} = props;
    console.log("'"+src+"'");
    return (
        <>
            <Wrapper>
                <img id={id} src={src} value={value} />
                <p>{title}</p>
            </Wrapper> 
        </>
    );
}

const Wrapper = styled.div`
    background-color: white;
    width: 66.94px;
    height: 84px;
    margin: 0% 2% 0% 2%;
    
    & img{
        background-color: white;
        width: 66px;
        height: 66px;
    }
    & p{
        background-color: white;
        color: black;
        font-family: 'ReadexPro-Regular';
        font-size: 12px;
        text-align: center;
    }
`;



export default Category;
