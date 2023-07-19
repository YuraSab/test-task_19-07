import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onAddTask} from "../../../redux/action-creators";
import styles from "./TaskAdd.module.css";

const TaskAdd = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const {tasks} = useSelector( ({tasks: {tasks}}) => ({tasks}) );
    const dispatch = useDispatch();


    const handleAddTask = () => {
        if (title && description && date) {
            dispatch(onAddTask({
                id: tasks.length > 0 ?
                    tasks[tasks.length - 1].id + 1
                    :
                    1,
                title,
                description,
                completed: false,
                addDate: new Date().toLocaleString().split(',')[0],
                dueDate: date,
            }));
        }
    };

    return (
        <div className={styles.main}>
            <h2>Add your task</h2>
            <h5>Title</h5>
            <input
                className={styles.inputTitle}
                type={"text"}
                onChange={(event) => setTitle(event.target.value)}
            />
            <h5>Description</h5>
            <textarea
                onChange={(event) => setDescription(event.target.value)}
                rows={5}
                maxLength={400}
                style={{width: 800}}
            />
            <h5>Date</h5>
            <input
                className={styles.inputDate}
                type={"date"}
                onChange={(event) => setDate(event.target.value.toLocaleString().split('-').reverse().join('.'))}
            /><br/>
            <button onClick={() => handleAddTask()}>Add task</button>
        </div>
    );
};

export default TaskAdd;