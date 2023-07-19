import React, {useState} from 'react';
import {useSelector} from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import TaskAdd from "../TaskAdd/TaskAdd";
import PlusBlackPlus from "../../../assets/icons/plus_black_icon.png";
import styles from "./TaskList.module.css";

const TaskList = ({completed}) => {

    const {tasks} = useSelector( ({tasks: {tasks}}) => ({tasks}) );

    const [addTaskActive, setAddTaskActive] = useState(false);

    const onSetAddTaskActive = () => {
        setAddTaskActive(prevState => !prevState);
    };


    return (
        <div className={styles.main}>
            {
                !completed &&
                <div className={styles.addButton} onClick={() => onSetAddTaskActive()}>
                    <img src={PlusBlackPlus} alt={"add task"} width={30}/>
                </div>
            }
            {
                addTaskActive && !completed && <TaskAdd/>
            }
            {
                tasks &&
                <div className={styles.list}>
                    {  tasks
                        .filter( task => task.completed === completed)
                        .map( task => <TaskItem task={task} key={task.id}/> )  }
                </div>
            }
        </div>
    );
};

export default TaskList;