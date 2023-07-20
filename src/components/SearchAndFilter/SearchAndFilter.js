import React from 'react';
import SearchInput from "../../ui/SearchInput/SearchInput";
import FilterDateInput from "../../ui/FilterDateInput/FilterDateInput";
import CustomButton from "../../ui/Button/CustomButton";
import styles from "./SearchAndFliters.module.css";

const SearchAndFilter = ({setSearchParams, setFilterDate, handleResetFilters}) => {
    return (
        <div className={styles.main}>
            <div>
                <SearchInput setSearchParams={setSearchParams}/>
            </div>
            <div>
                <FilterDateInput setFilterDate={setFilterDate}/>
            </div>
            <div>
                <CustomButton onClick={handleResetFilters} caption={"Reset filters"}/>
            </div>
        </div>
    );
};

export default SearchAndFilter;