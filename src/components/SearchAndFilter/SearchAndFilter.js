import React from 'react';
import PropTypes from "prop-types";
import styles from "./SearchAndFliters.module.css";
import SearchInput from "../../ui/SearchInput/SearchInput";
import FilterDateInput from "../../ui/FilterDateInput/FilterDateInput";
import CustomButton from "../../ui/Button/CustomButton";

const SearchAndFilter = ({setSearchParams, setFilterDate, handleResetFilters}) => {
    return (
        <div className={styles.main}>
                <SearchInput setSearchParams={setSearchParams}/>
                <FilterDateInput setFilterDate={setFilterDate}/>
                <CustomButton onClick={handleResetFilters} caption={"Reset filters"}/>
        </div>
    );
};

SearchAndFilter.propTypes = {
    setSearchParams: PropTypes.func,
    setFilterDate: PropTypes.func,
    handleResetFilters: PropTypes.func,
}

export default SearchAndFilter;