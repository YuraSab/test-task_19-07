import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.main}>
            <div>Tasks</div>
            <div>Completed tasks</div>

        </div>
    );
};

export default Header;