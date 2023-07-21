import React from 'react';
import PropTypes from "prop-types";
import styles from "./FilterDateInput.module.css";

const FilterDateInput = ({setFilterDate}) => {
    return (
        <input
            type={"date"}
            onChange={(event) => setFilterDate(event.target.value.toLocaleString().split('-').reverse().join('.'))}
            className={styles.main}
        />
    );
};

FilterDateInput.propTypes = {
    setFilterDate: PropTypes.func,
};

export default FilterDateInput;