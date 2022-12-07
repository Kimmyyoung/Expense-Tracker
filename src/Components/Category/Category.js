import React from "react";
import styled from "styled-components";

const Category = (props) => {
    const { id, src, value, title} = props;
    
    return (
        <>
            <Wrapper>
                <img id={id} src={src} value={value}/>
                <p>{title}</p>
            </Wrapper> 
        </>
    );
}

const Wrapper = styled.div`
    background-color: ${prop => prop.theme.backColor};
    width: 66.94px;
    height: 84px;
    margin: 0% 2% 0% 2%;
    
    & img{
        background-color: ${prop => prop.theme.backColor};
        width: 66px;
        height: 66px;
        border-radius: 10px;
    }
    & p{
        background-color: ${prop => prop.theme.backColor};
        color: ${prop => prop.theme.textColor};
        font-family: 'ReadexPro-Regular';
        font-size: 12px;
        text-align: center;
    }
`;



export default Category;
