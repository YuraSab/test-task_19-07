import React from 'react';
import SearchInput from "../../ui/SearchInput/SearchInput";

const SearchAndFilter = ({setSearchParams}) => {
    return (
        <div>
            <SearchInput setSearchParams={setSearchParams}/>
        </div>
    );
};

export default SearchAndFilter;