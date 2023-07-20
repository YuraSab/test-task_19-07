import React from 'react';
import PropTypes from "prop-types";
import styles from "./CustomButton.module.css";

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