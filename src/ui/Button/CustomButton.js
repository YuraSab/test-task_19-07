import React from 'react';
import styles from "./CustomButton.module.css";
import PropTypes from "prop-types";

const CustomButton = ({onClick, caption}) => {
    return (
        <button className={styles.customButton} onClick={() => onClick()}>{caption}</button>
    );
};

CustomButton.propTypes = {
    onClick: PropTypes.func,
    caption: PropTypes.string,
};

export default CustomButton;