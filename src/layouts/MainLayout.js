import React from 'react';
import styles from "./MainLayout.module.css";
import Header from "../components/Header/Header";
import TaskList from "../components/Tasks/TaskList/TaskList";

const MainLayout = () => {
    return (
        <div className={styles.main}>
            <header>
                <Header/>
            </header>
            <main>
                <TaskList/>
            </main>
        </div>
    );
};

export default MainLayout;