import React, { useMemo, useState } from "react";
import Button from "../Components/Button/Button";
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
                <StyledButton>
                    <Button onClick={startEditingHandler} content="Add New Transaction" />
                </StyledButton>
            )}

            {isEditing && (
                <>
                    <StopEditContext.Provider value={memorizedStopEdit}>
                        <NewItemContainer />
                    </StopEditContext.Provider>

                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color: ${prop => prop.theme.textColor};
    background-color: ${prop => prop.theme.backColor};
    content-align: center;
    font-family: 'ReadexPro-Regular';
    border-radius: 20px;
`;

const StyledButton = styled.div`
    text-align: center;
    width: 393px;
    & Button {
        width: 393px;
    }
`;

export default NewItem;