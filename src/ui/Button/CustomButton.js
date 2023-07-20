import React from 'react';
import styles from "./CustomButton.module.css";

const CustomButton = ({onClick, caption}) => {
    return (
        <button className={styles.customButton} onClick={() => onClick()}>{caption}</button>
    );
};

export default CustomButton;