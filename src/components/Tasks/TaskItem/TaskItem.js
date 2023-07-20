import React from 'react';
import styles from "./TaskItem.module.css";
import {Link} from "react-router-dom";

const TaskItem = ({task}) => {

    const actualDate = new Date().toLocaleString().split(',')[0];

    return (
        <Link to={`/chosen-task/${task.id}`}>
            <div className={styles.main}>
                <div className={styles.title}>{task.title}</div>
                <div className={styles.description}>{task.description}</div>
                <div className={styles.dates}>
                    <div>
                        <div>{task.addDate}</div>
                        <label>Add date</label>
                    </div>
                    <div>
                        <div style={{color: task.dueDate >= actualDate ? "black" : "red"}}>{task.dueDate}</div>
                        <label>Due date</label>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TaskItem;