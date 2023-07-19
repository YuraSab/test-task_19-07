import React from 'react';
import styles from "./MainLayout.module.css";
import Header from "../../components/Header/Header";
import TaskList from "../../components/Tasks/TaskList/TaskList";
import {Route, Routes, Navigate} from "react-router-dom";
import Main from "./Main";
import ChosenTask from "../../components/Tasks/ChosenTask/ChosenTask";

const MainLayout = () => {
    return (
        <div className={styles.main}>
            <header>
                <Header/>
            </header>
            <main>
                <Routes>
                    <Route path={"/"} element={<Main/>}>
                        <Route index element={<Navigate to={"/tasks"} replace/>}/>
                        <Route path={"/tasks"} element={<TaskList completed={false}/>}/>
                        <Route path={"/completed-tasks"} element={<TaskList completed={true}/>}/>

                        <Route path={"/chosen-task/:id"} element={<ChosenTask/>}/>
                    </Route>
                </Routes>
            </main>
        </div>
    );
};

export default MainLayout;