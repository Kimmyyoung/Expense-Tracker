import React, { useCallback, useState, useContext } from "react";
import styled from 'styled-components';
import { addComma, enteredOnlyNumber, deleteComma } from '../utils/numberUtils.js';
import { ItemDispatchContext } from "../App.js";
import { StopEditContext } from "./NewItem.js";
import Input from "../Input/Input";
import Button from "../Button/Button";

const NewItemForm = () => {

    const [{ onAdd }, { nextItemId }] = useContext(ItemDispatchContext);
    const { stopEditingHandler } = useContext(StopEditContext);

    
    const [enterDate, setEnterDate] = useState("");
    const [enterTitle, setEnterTitle] = useState("");
    const [enterAmount, setEnterAmount] = useState("");
    const [enterAmountType, setenterAmountType] = useState("income");

    const TITLE_SIZE = 35;

    const [isTitleSizeOver, setIsTitleSizeOver] = useState(false);
    const [isEnterWrongAmount, setIsEnterWrongAmount] = useState(false);


    const getDate = useCallback(()=>{
        return new Date().toISOString.substring(0,10);
    },[]);

    const dateChangeHandler = (e) => {
        setEnterDate(e.target.value);
    } // Date Handler

    const titleChangeHandler = (e) => {
        let isSizeover = e.target.value.length > TITLE_SIZE ? true : false;
        setIsTitleSizeOver(isSizeover);
        setEnterTitle(e.target.value);
    } //

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
        <form className="NewItemForm" onSubmit={submitHandler}>
            <div>
                <h2>Date</h2>
                <Input type="date" value={enterDate} onChange={dateChangeHandler} min="2020-01-01" max={getDate()} required />
            </div>
            <div>
                <div>
                    <h2>Category</h2>
                    <span style={{display: isTitleSizeOver ? "inline-block" : "none"}}>
                        {TITLE_SIZE} 자 까지만 입력할 수 있어요
                    </span>
                </div>

                <Input type="text" value={enterTitle} onChange={titleChangeHandler} placeholder="Category" maxLength={TITLE_SIZE} required />
            </div>

            <div>
                <div>
                    <h2>Amount</h2>
                    <span style={{display: isEnterWrongAmount? "inline-block" : "none"}}>
                        Please Enter below $100,000
                    </span>
                </div>

                <Input type="text" value={enterAmount} onChange={amountChangeHandler} placeholder="$10" maxLength="11" required />


                <div className="amounttype">
                    <Input type="radio" id="income" name="amountType" value="income" 
                    onChange={amountTypeChangeHandler} 
                    checked={enterAmountType === "income" || ""} required />
                    <label>수입</label>
                </div>
                
                <div className="amounttype">
                    <Input type="radio" id="expense" name="amountType" 
                    value="expense" onChange={amountTypeChangeHandler} 
                    checked={enterAmountType === "expense" || ""} required />
                    <label>지출</label>
                </div>
            </div>


            <div>
                <Button type="submit" className="btn" content="Add New Transaction" />
                <Button type="button" className="btn" onClick={stopEditingHandler} content="Cancle" />
            </div>



        </form>
    )
}

export default NewItemForm;
