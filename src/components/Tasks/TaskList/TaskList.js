import React, {useState} from 'react';
import {useSelector} from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import TaskAdd from "../TaskAdd/TaskAdd";
import PlusBlackPlus from "../../../assets/icons/plus_black_icon.png";
import styles from "./TaskList.module.css";
import {useSearchParams} from "react-router-dom";
import SearchAndFilter from "../../SearchAndFilter/SearchAndFilter";
import EmptyList from "../../EmptyList/EmptyList";

const TaskList = ({completed}) => {

    const [addTaskActive, setAddTaskActive] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterDate, setFilterDate] = useState("");

    const {tasks} = useSelector( ({tasks: {tasks}}) => ({tasks}) );

    const onSetAddTaskActive = () => {
        setAddTaskActive(prevState => !prevState);
    };

    const handleResetFilters = () => {
        setSearchParams({});
        setFilterDate("");
    }

    return (
        <div className={styles.main}>
            {
                tasks.length > 0 &&
                    <SearchAndFilter
                        setSearchParams={setSearchParams}
                        setFilterDate={setFilterDate}
                        handleResetFilters={handleResetFilters}
                    />
            }
            {
                !completed &&
                <div className={styles.addButton} onClick={() => onSetAddTaskActive()}>
                    <img src={PlusBlackPlus} alt={"add task"} width={30}/>
                </div>
            }
            {
                tasks.length < 1 && !addTaskActive && <EmptyList/>
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
                        .filter((task) => {
                            if (!filterDate) return true;
                            return filterDate === task.dueDate;
                        })
                        .map( task => <TaskItem task={task} key={task.id}/> )  }
                </div>
            }
        </div>
    );
};

export default TaskList;