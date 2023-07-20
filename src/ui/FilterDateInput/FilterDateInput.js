import React from 'react';
import PropTypes from "prop-types";

const FilterDateInput = ({setFilterDate}) => {
    return (
        <input
            type={"date"}
            onChange={(event) => setFilterDate(event.target.value.toLocaleString().split('-').reverse().join('.'))}
            style={{width: 200, height: 32}}
        />
    );
};

FilterDateInput.propTypes = {
    setFilterDate: PropTypes.func,
};

export default FilterDateInput;