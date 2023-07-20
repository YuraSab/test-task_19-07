import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.main}>
            <NavLink className={({isActive}) => (isActive ? styles.active : styles.nonActive)} to={"/tasks"}><div>Tasks</div></NavLink>
            <NavLink className={({isActive}) => (isActive ? styles.active : styles.nonActive)} to={"/completed-tasks"}><div>Completed tasks</div></NavLink>
        </div>
    );
};

export default Header;