import React, {useState} from 'react';
import {useSelector} from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import TaskAdd from "../TaskAdd/TaskAdd";
import PlusBlackPlus from "../../../assets/icons/plus_black_icon.png";
import styles from "./TaskList.module.css";

const TaskList = () => {

    const {tasks} = useSelector( ({tasks: {tasks}}) => ({tasks}) );

    const [addTaskActive, setAddTaskActive] = useState(false);



    const onSetAddTaskActive = () => {
        setAddTaskActive(prevState => !prevState);
    };


    console.log(tasks)

    return (
        <div className={styles.main}>
            <div className={styles.addButton} onClick={() => onSetAddTaskActive()}>
                <img src={PlusBlackPlus} alt={"add task"} width={30}/>
            </div>
            {
                addTaskActive && <TaskAdd/>
            }
            {
                tasks &&
                <div className={styles.list}>
                    {  tasks.map( task => <TaskItem task={task} key={task.id}/> )  }
                </div>
            }
        </div>
    );
};

export default TaskList;