import React from 'react';
import styles from "./EmptyList.module.css";

const EmptyList = () => {
    return (
        <div className={styles.main}>
            No items
        </div>
    );
};

export default EmptyList;