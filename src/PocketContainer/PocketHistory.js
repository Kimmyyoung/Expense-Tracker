import React from "react";
import styled from "styled-components";
import Filter from "../Filter/Filter";
import PocketItem from "./PocketItem";

const PocketHistory = (props)=>{
   return (
    <>
        <div>
            <div>
                <h2>연간내역</h2>
                <Filter />
            </div>
            <PocketItem />
        </div>
    </>
   )
}

export default PocketHistory;