import React, { useContext } from "react";
import { FilterContext } from "../PocketContainer/PocketContainer";

const Filter = () => {
    const { onChangeFilter, filterBaseYear } = useContext(FilterContext); 

    const handleChangeFilter = (e) => {
        onChangeFilter(e.target.value);
    }

    return (
        <select id="filter" name="flter" value={filterBaseYear} onChange={handleChangeFilter}
        title="YEAR" aria-label="Select Year">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
        </select>
    );
}

export default Filter;