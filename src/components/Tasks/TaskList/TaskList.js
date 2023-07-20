import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import styles from "./TaskList.module.css";
import SearchAndFilter from "../../SearchAndFilter/SearchAndFilter";
import EmptyList from "../../EmptyList/EmptyList";
import TaskAdd from "../TaskAdd/TaskAdd";
import TaskItem from "../TaskItem/TaskItem";
import PlusBlackPlus from "../../../assets/icons/plus_black_icon.png";

const TaskList = ({completed}) => {

    const [addTaskActive, setAddTaskActive] = useState(false);
    const [filterDate, setFilterDate] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

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
                            let description = task.description.toLowerCase();
                            return title.includes(filter.toLowerCase()) || description.includes(filter.toLowerCase());
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


TaskList.propTypes = {
    completed: PropTypes.bool
}

export default TaskList;