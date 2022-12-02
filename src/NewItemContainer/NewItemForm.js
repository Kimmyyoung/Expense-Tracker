import React, { useCallback, useState, useContext } from "react";
import { addComma, enteredOnlyNumber, deleteComma } from '../utils/numberUtils.js';
import { StopEditContext } from "./NewItem.js";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styled from "styled-components";
import { ItemDispatchContext } from "../App.js";


const NewItemForm = () => {
    const [{ onAdd },{ nextItemId }] = useContext(ItemDispatchContext);
    const { stopEditingHandler } = useContext(StopEditContext);

    const [enterDate, setEnterDate] = useState("");
    const [enterTitle, setEnterTitle] = useState("");
    const [enterAmount, setEnterAmount] = useState("");
    const [enterAmountType, setenterAmountType] = useState("income");

    const TITLE_SIZE = 35;

    const [isTitleSizeOver, setIsTitleSizeOver] = useState(false);
    const [isEnterWrongAmount, setIsEnterWrongAmount] = useState(false);


    const getDate = useCallback(()=>{
        return new Date().toISOString().substring(0,10);
    },[]);

    const dateChangeHandler = (e) => {
        setEnterDate(e.target.value);
    } // Date Handler

    const titleChangeHandler = (e) => {
        let isSizeover = e.target.value.length > TITLE_SIZE ? true : false;
        setIsTitleSizeOver(isSizeover);
        setEnterTitle(e.target.value);
    } 

    const amountChangeHandler = (e) => {
        let isNotNumber = /^[^1-9][^0-9]{0,11}$/g.test(e.target.value) ? true : false;
        setIsEnterWrongAmount(isNotNumber);
        if(isNotNumber) return; //if 'isnotnumber' is true, return 
        let amount = addComma(enteredOnlyNumber(e.target.value)); //amount add comma and check only number 
        setEnterAmount(amount);
    }

    const amountTypeChangeHandler = (event) => {
        setenterAmountType(event.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault(); //avoid rerending page

        const enteredData = {
            id: nextItemId,
            date : new Date(enterDate),
            title: enterTitle,
            amount: deleteComma(enterAmount),
            amountType: enterAmountType,
        };

        onAdd(enteredData); //giving the data to parents components

        setEnterAmount("");
        setEnterTitle("");
        setEnterDate("");
        setenterAmountType("");

        stopEditingHandler();
    }

    return (
        <Wrapper>

        <form className="NewItemForm" onSubmit={submitHandler}>
            <DateContainer>
                <h2>Date</h2>
                <Input type="date" value={enterDate} onChange={dateChangeHandler} min="2020-01-01" max={getDate()} required />
            </DateContainer>

            <CategoryContainer>
                <h2>Category</h2>
                
                <Input type="text" value={enterTitle} onChange={titleChangeHandler} placeholder="Category" maxLength={TITLE_SIZE} required />
            </CategoryContainer>

            <AmountContainer>
                <AmountContainerSubtitle>
                    <h2>Amount</h2>
                    <span style={{display: isEnterWrongAmount? "inline-block" : "none"}}>
                        Please Enter below $100,000
                    </span>
                </AmountContainerSubtitle>

                <Input type="text" value={enterAmount} onChange={amountChangeHandler} placeholder="$10" maxLength="11" required />

                <AmountTypeContainer>
                    <AmountType>
                        <Input type="radio" id="income" name="amountType" value="income" 
                        onChange={amountTypeChangeHandler} 
                        checked={enterAmountType === "income" || ""} required />
                        <label>Income</label>
                    </AmountType>
                    
                    <AmountType>
                        <Input type="radio" id="expense" name="amountType" 
                        value="expense" onChange={amountTypeChangeHandler} 
                        checked={enterAmountType === "expense" || ""} required />
                        <label>Expense</label>
                    </AmountType>


                </AmountTypeContainer>
                
            </AmountContainer>

            <ButtonContainer>
                <Button type="submit" className="btn" onClick={submitHandler} content="Continue" />
                <Button type="button" className="cancleBtn" onClick={stopEditingHandler} content="Cancle" />
            </ButtonContainer>
        </form>
        </Wrapper>
        
    )
}
const Wrapper = styled.div`
    background-color: white;
    content-align: center;
    border-radius: 20px;
    & .NewItemForm {
        background-color: white;
    }
`;
const DateContainer = styled.div`
    background-color: white;
    
    & h2 {
        background-color: white;
        font-family: 'ReadexPro-SemiBold';
        font-size: 16px;
        padding-left: 5%;
    }

    & Input{
        background-color: white;
        height: 30px;
        padding: 3%;
        margin: 5%;
    }
`;

const CategoryContainer = styled.div`
    background-color: white;
    & h2 {
        background-color: white;
        font-family: 'ReadexPro-SemiBold';
        font-size: 16px;
        padding-left: 5%;
    }
    & Input{
        background-color: white;
        height: 30px;
        padding: 3%;
        margin: 5%;
    }
`;

const CategorySelect = styled.select`
    background-color: white;
    font-family: 'ReadexPro-SemiBold';
    font-size: 16px;
    border-radius: 10px;
    border: none;
    color: #51DE9;
    height: 50px;
    width: 350px;
    margin:5%;
    & option {
        background-color: white;
        padding-left: 10%;
    }
`;

const AmountContainer = styled.div`
    background-color: white;
    & Input {
        background-color: white;
        height: 30px;
        padding: 3%;
        margin: 5%;
    }
`;

const AmountContainerSubtitle = styled.div`
    background-color: white;
    & h2 {
        background-color: white;
        padding-left: 5%;
        font-family: 'ReadexPro-SemiBold';
        font-size: 16px;    
    }
    & span {
        background-color: white;
        padding-left: 5%;
        font-family: 'ReadexPro-regular';
        font-size: 16px;      
    }
 
`;


const AmountTypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;

`;

const AmountType = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    width: 50%;
    margin-left: 5%;

    & Input {
        width: 30px;
        height: 30px;
        padding: 3%;
    }
    & label {
        font-family: 'ReadexPro-Regular';
        font-size: 16px;
        background-color: white;
        margin-left: 5%;
        padding-top: 5%;
    }
`;

const ButtonContainer = styled.div`
    background-color: white;
    margin: 5% 0% 5% 0%;
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
        width: 40%;
        margin: 3%
    }
`;

export default NewItemForm;
