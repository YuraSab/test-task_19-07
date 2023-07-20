import React from 'react';

const FilterDateInput = ({setFilterDate}) => {
    return (
        <input
            type={"date"}
            onChange={(event) => setFilterDate(event.target.value.toLocaleString().split('-').reverse().join('.'))}
            style={{width: 200, height: 32}}
        />
    );
};

export default FilterDateInput;