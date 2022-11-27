import React, { useContext } from "react";
import { FilterContext } from "../PocketContainer/PocketContainer";
import styled from "styled-components";

const Filter = () => {
    const { onChangeFilter, filterBaseYear } = useContext(FilterContext); 

    const handleChangeFilter = (e) => {
        onChangeFilter(e.target.value);
    }

    return (
            <Select id="filter" name="flter" value={filterBaseYear} onChange={handleChangeFilter}
             title="YEAR" aria-label="Select Year">
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </Select>
    );
}

const Select = styled.select`
    background-color: white;
    content-align: center;
    border:none;
    & #filter{
        background-color: white;
        cursor: pointer;
        display: inline-block;
        position: relative;
        font-size: 16px;
        color: $select-color;
        width: $select-width;
        height: $select-height;
    }
`;

export default Filter;