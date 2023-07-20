import React from 'react';
import PropTypes from "prop-types";

const SearchInput = ({setSearchParams}) => {
    return (
        <input
            onChange={(event) => {
                let filter = event.target.value;
                if(filter){
                    setSearchParams( {filter} );
                }else {
                    setSearchParams( {} );
                }
            }}

            placeholder={"search"}
            style={{width: 300, height: 30}}
        />
    );
};

SearchInput.propType = {
    setSearchParams: PropTypes.func,
};

export default SearchInput;