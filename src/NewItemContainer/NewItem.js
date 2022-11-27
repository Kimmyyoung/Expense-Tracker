import React, { useMemo, useState } from "react";
import Button from "../Button/Button";
import NewItemContainer from "./NewItemContainer";
import styled from "styled-components";

export const StopEditContext = React.createContext();

const NewItem = () => {
    const [ isEditing, setIsEditing ] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const memorizedStopEdit = useMemo(() => {
        return { stopEditingHandler };
    }, []);

    return (
        <Wrapper style={{cursor: !isEditing ? "pointer" : "auto"}}>
            {!isEditing && (
                <Button onClick={startEditingHandler} content="Add New Transaction" />
            )}
            {isEditing && (
                
                <StopEditContext.Provider value={memorizedStopEdit}>
                    <NewItemContainer />
                </StopEditContext.Provider>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: white;
    content-align: center;
    font-family: 'ReadexPro-Regular';
`;

export default NewItem;