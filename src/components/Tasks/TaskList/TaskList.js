import React, {useState} from 'react';
import {useSelector} from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import TaskAdd from "../TaskAdd/TaskAdd";
import PlusBlackPlus from "../../../assets/icons/plus_black_icon.png";
import styles from "./TaskList.module.css";
import {useSearchParams} from "react-router-dom";
import SearchAndFilter from "../../SearchAndFilter/SearchAndFilter";

const TaskList = ({completed}) => {

    const [addTaskActive, setAddTaskActive] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const {tasks} = useSelector( ({tasks: {tasks}}) => ({tasks}) );

    const onSetAddTaskActive = () => {
        setAddTaskActive(prevState => !prevState);
    };


    return (
        <div className={styles.main}>
            {
                tasks && <SearchAndFilter setSearchParams={setSearchParams}/>
            }
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
                        .filter((task) => {
                            let filter = searchParams.get("filter");
                            if (!filter) return true;
                            let title = task.title.toLowerCase();
                            return title.includes(filter.toLowerCase());
                        })
                        .map( task => <TaskItem task={task} key={task.id}/> )  }
                </div>
            }
        </div>
    );
};

export default TaskList;